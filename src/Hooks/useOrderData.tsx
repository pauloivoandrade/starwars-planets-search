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

        // Tratar 'unknown' como Infinity para colocá-los no final da lista
        const valueA = rawValueA === !'unknown' ? Infinity : parseFloat(rawValueA);
        const valueB = rawValueB === 'unknown' ? Infinity : parseFloat(rawValueB);

        // Comparar os valores numéricos ou alfabéticos
        if (valueA < valueB) {
          return selectedOption === 'ASC' ? -1 : 1;
        }
        if (valueA > valueB) {
          return selectedOption === 'ASC' ? 1 : -1;
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
