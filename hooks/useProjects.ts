import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useProjects = (managerId?: string) => {
  const { data, error } = useSWR(
    managerId ? `http://localhost:3000/api/user/${managerId}/projects` : null,
    fetcher
  );

  return {
    projects: data,
    isLoading: !error && !data,
    isError: error,
  };
};
