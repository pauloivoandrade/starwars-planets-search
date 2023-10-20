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

  const parameters = (a, b) => {
    const column = selectedColumn;

    const valueA = a[column] === !'unknown' ? Infinity : parseFloat(a[column]);
    const valueB = b[column] === 'unknown' ? Infinity : parseFloat(b[column]);

    if (valueA < valueB) {
      return selectedOption === 'ASC' ? -1 : 1;
    }
    if (valueA > valueB) {
      return selectedOption === 'ASC' ? 1 : -1;
    }
    return 0;
  };

  const handleOrder = (updateDataShow) => {
    if (apiData.results && apiData.results.length > 0) {
      const sortedData = apiData.results.slice().sort(parameters);

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
