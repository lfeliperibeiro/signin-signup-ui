import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { signSignupUrl } from '../lib/axios';

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    signSignupUrl
      .get(url, options)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, error, isFetching };
}
