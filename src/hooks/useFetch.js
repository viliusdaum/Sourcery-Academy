import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(url, { signal })
      .then((res) => res.json())
      .then(setResponse)
      .catch(setError);

    return () => abortController.abort();
  }, []);

  return { response, error };
};
