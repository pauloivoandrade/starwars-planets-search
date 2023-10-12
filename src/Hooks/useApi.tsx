import { useState, useEffect } from 'react';

export default function useFetchApi(api: string) {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(api);
    const data = await response.json();
    delete data.residents;
    setApiData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    fetchData,
    loading,
    apiData,
  };
}
