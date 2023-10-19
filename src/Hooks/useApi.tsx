import { useState, useEffect } from 'react';

export default function useFetchApi() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
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
