import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const fetchWithToken = (url: string, token: string) =>
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
