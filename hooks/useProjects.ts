import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useProjects = (managerId?: string) => {
  console.log(process.env.DEV_URL);
  const { data, error } = useSWR(
    managerId ? `/api/user/${managerId}/projects` : null,
    fetcher
  );

  return {
    projects: data,
    isLoading: !error && !data,
    isError: error,
  };
};
