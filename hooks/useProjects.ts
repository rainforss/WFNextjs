import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useProjects = (managerId?: string) => {
  const { data, error } = useSWR(
    managerId
      ? `${
          process.env.NODE_ENV === "production"
            ? `${process.env.NEXTAUTH_URL}`
            : "http://localhost:3000"
        }/api/user/${managerId}/projects`
      : null,
    fetcher
  );

  return {
    projects: data,
    isLoading: !error && !data,
    isError: error,
  };
};
