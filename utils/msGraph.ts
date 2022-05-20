import { msalInstance } from "./msalClient";
import { graphConfig, loginRequest } from "./authConfig";
import { Group, User } from "@microsoft/microsoft-graph-types-beta";

const getAuthorizationHeader = async () => {
  try {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error("No active account found.");
    }
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);
    return headers;
  } catch (error) {
    console.log(error);
  }
};

export async function callMsGraph() {
  try {
    const headers = await getAuthorizationHeader();
    const options = {
      method: "GET",
      headers: headers,
    };

    const result = await (
      await fetch(graphConfig.graphMeEndpoint, options)
    ).json();
    const user = result as User;
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getMemberGroups() {
  try {
    const headers = await getAuthorizationHeader();
    const options = {
      method: "GET",
      headers: headers,
    };

    const result = await (
      await fetch(graphConfig.graphMeMemberEndpoint, options)
    ).json();
    const groups = result.value as Group[];
    return groups;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserProfilePic() {
  try {
    const headers = await getAuthorizationHeader();
    headers!.append("Content-Type", "image/jpg");
    const options = {
      method: "GET",
      headers: headers,
    };

    const result = await fetch(graphConfig.graphMePhotoEndpoint, options);
    const file = result.body;
    const stream = new Response(file);
    const blob = await stream.blob();

    const url = window.URL || window.webkitURL;
    const blobUrl = url.createObjectURL(blob);

    return blobUrl;
  } catch (error) {
    console.log(error);
  }
}
