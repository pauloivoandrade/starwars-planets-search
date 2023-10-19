import { useState } from 'react';
import useFetchApi from './useApi';
import { planetCard } from '../components/planetsCard';

function useOrderData() {
  const { apiData } = useFetchApi();
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [selectedOption, setSelectedOption] = useState('Ascendente');
  const [treatedData] = useState([]);

  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleOrder = (updateDataShow) => {
    if (apiData.results && apiData.results.length > 0) {
      const sortedData = apiData.results.slice().sort((a, b) => {
        const column = selectedColumn;
        const rawValueA = a[column];
        const rawValueB = b[column];

        const valueA = Number.isNaN(rawValueA) ? rawValueA : parseFloat(rawValueA);
        const valueB = Number.isNaN(rawValueB) ? rawValueB : parseFloat(rawValueB);

        if (valueA === 'unknown' && valueB === 'unknown') {
          return 0;
        }
        if (valueA === 'unknown') {
          return 1;
        }
        if (valueB === 'unknown') {
          return -1;
        }

        if (valueA < valueB) {
          return selectedOption === 'ASC' ? -1 : 1; // Troque -1 e 1 para ASC
        }
        if (valueA > valueB) {
          return selectedOption === 'ASC' ? 1 : -1; // Troque 1 e -1 para ASC
        }
        return 0;
      });

      const newData = sortedData.map((planet, index) => planetCard(planet, index));
      updateDataShow(newData);
    } else {
      console.log('Não há dados para ordenar.');
    }
  };

  return {
    treatedData,
    selectedColumn,
    handleColumnChange,
    selectedOption,
    handleOptionChange,
    handleOrder,
  };
}

export default useOrderData;
