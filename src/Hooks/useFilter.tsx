import { useEffect, useState } from 'react';
import useFetchApi from './useApi';

export default function useFilter(
  coluna: string,
  operador: string,
  valor: number,
  combinedFilters: any[],
) {
  const { apiData, loading } = useFetchApi();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!loading && apiData.results) {
      const filteredResults = apiData.results.filter((planet: any) => {
        const passesCombinedFilters = passCombinedFiltersPlanets(planet, combinedFilters);
        const passSingleFilter = passSingleFilterPlanets(planet, coluna, operador, valor);

        return passesCombinedFilters && passSingleFilter;
      });

      setFilteredData(filteredResults);
    }
  }, [apiData.results, coluna, operador, valor, combinedFilters, loading]);

  return { filteredData };
}

function passCombinedFiltersPlanets(planet: any, combinedFilters: any[]): boolean {
  return combinedFilters.every((filter) => {
    const planetValue = parseFloat(planet[filter.coluna]);
    if (!Number.isNaN(planetValue)) {
      switch (filter.operador) {
        case 'maior_que':
          return planetValue > parseFloat(filter.valor);
        case 'menor_que':
          return planetValue < parseFloat(filter.valor);
        default:
          return planetValue === parseFloat(filter.valor);
      }
    }
    return false;
  });
}

function passSingleFilterPlanets(
  planet: any,
  coluna: string,
  operador: string,
  valor: number,
): boolean {
  const planetValue = parseFloat(planet[coluna]);
  if (!Number.isNaN(planetValue)) {
    switch (operador) {
      case 'maior_que':
        return planetValue > valor;
      case 'menor_que':
        return planetValue < valor;
      default:
        return planetValue === valor;
    }
  }
  return false;
}
