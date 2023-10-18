import useFetchApi from './useApi';

export default function useFilter(coluna: string, operador: string, valor: number) {
  const { apiData } = useFetchApi('https://swapi.dev/api/planets');

  const filteredData = apiData.results && apiData.results
    .filter((planet: any) => {
      const planetValue = parseFloat(planet[coluna]);

      if (!Number.isNaN(planetValue)) {
        const filterValue = valor;

        switch (operador) {
          case 'maior_que':
            return planetValue > filterValue;
          case 'menor_que':
            return planetValue < filterValue;
          default:
            return planetValue === filterValue;
        }
      }

      return false;
    });

  return { filteredData };
}
