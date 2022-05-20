import useSWR from "swr";
import { graphConfig } from "../utils/authConfig";
import { fetchWithToken } from "../utils/fetcher";

export const useProfile = (token?: string) => {
  const { data, error } = useSWR(
    token ? [graphConfig.graphMeEndpoint, token] : null,
    fetchWithToken,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );

  return {
    profile: data,
    isLoading: !error && !data,
    isError: error,
  };
};
