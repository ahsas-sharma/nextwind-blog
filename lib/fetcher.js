import useSWR from "swr";

const response = (...args) => fetch(...args).then((res) => res.json());

export default function useFetcher(endpoint) {
  const { data, error } = useSWR(`http://localhost:3000${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
