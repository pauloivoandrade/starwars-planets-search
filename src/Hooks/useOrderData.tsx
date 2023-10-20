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

        // Tratar 'unknown' como Infinity para colocá-los no final da lista
        const valueA = a[column] === !'unknown' ? Infinity : parseFloat(a[column]);
        const valueB = b[column] === 'unknown' ? Infinity : parseFloat(b[column]);

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
