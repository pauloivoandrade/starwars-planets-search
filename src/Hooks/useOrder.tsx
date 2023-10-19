import { useState, useMemo } from 'react';

export default function useOrder(data) {
  const [columnSelected, setColumnSelected] = useState('population');
  const [asc, setAsc] = useState(true);
  const [desc, setDesc] = useState(false);

  const sortedData = useMemo(() => {
    function sortByKey(data, key, order = 'asc') {
      if (order === 'asc') {
        return data.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));
      } else if (order === 'desc') {
        return data.slice().sort((a, b) => (a[key] > b[key] ? -1 : 1));
      } else {
        throw new Error('Invalid order parameter. Please use "asc" or "desc".');
      }
    }

    return sortByKey(data, columnSelected, asc ? 'asc' : 'desc');
  }, [data, columnSelected, asc]);

  function handleSort(column) {
    if (column === columnSelected) {
      setAsc(!asc);
      setDesc(!desc);
    } else {
      setColumnSelected(column);
      setAsc(true);
      setDesc(false);
    }
  }

  return {
    sortedData,
    columnSelected,
    asc,
    desc,
    handleSort,
  };
}
