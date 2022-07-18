import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useProject = (managerId: string, projectNumber: string) => {
  const { data, error, mutate } = useSWR(
    managerId && projectNumber
      ? `${
          process.env.NODE_ENV === "production"
            ? `${process.env.SITE_URL}`
            : "http://localhost:3000"
        }/api/user/${managerId}/projects/${projectNumber}`
      : null,
    fetcher
  );

  return {
    project: data,
    mutateProject: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};
