import useSWR from "swr";
import { graphConfig } from "../utils/authConfig";
import { fetchWithToken } from "../utils/fetcher";

export const useGroups = (token?: string) => {
  const { data, error } = useSWR(
    token ? [graphConfig.graphMeMemberEndpoint, token] : null,
    fetchWithToken,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );

  return {
    groups: data,
    isLoading: !error && !data,
    isError: error,
  };
};
