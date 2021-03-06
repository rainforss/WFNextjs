import useSWR from "swr";
import { ModifiedNote } from "../components/ProjectSection";
import { fetcher } from "../utils/fetcher";

export const useProjectNotes = (
  managerId?: string | null,
  projectNumber?: string
) => {
  const { data, error, mutate } = useSWR(
    managerId && projectNumber
      ? `/api/user/${managerId}/projects/${projectNumber}/notes`
      : null,
    fetcher
  );

  return {
    projectNotes: data as ModifiedNote[],
    mutateProjectNotes: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};
