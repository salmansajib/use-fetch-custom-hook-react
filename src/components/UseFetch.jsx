/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

function UseFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e}, some error occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, error };
}

export default UseFetch;
