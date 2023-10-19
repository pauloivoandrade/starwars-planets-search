import React, { useState, useEffect } from 'react';
import './App.css';
import useFetchApi from './Hooks/useApi';
import useFilter from './Hooks/useFilter';
import { planetCard } from './components/planetsCard';

function App() {
  const [filter, setFilter] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [selectedOperator, setSelectedOperator] = useState('maior_que');
  const [inputValue, setInputValue] = useState('0');
  const { loading, apiData } = useFetchApi();
  const [dataShow, setDataShow] = useState();
  const [combinedFilters, setCombinedFilters] = useState([]);
  const { filteredData } = useFilter(
    selectedColumn,
    selectedOperator,
    parseFloat(inputValue),
    combinedFilters,
  );

  const [dataShowHistory, setDataShowHistory] = useState([]);

  const [selectColumn, setSelectColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const initialValue = apiData.results && apiData.results
    .map((planet: any, index: number) => (
      planetCard(planet, index)
    ));

  const filtereSelect = filteredData && filteredData.map((planet, index) => (
    planetCard(planet, index)
  ));

  useEffect(() => { // nao vou precisar
    if (apiData.results) {
      setDataShow(initialValue);
    }
  }, [apiData.results]);

  function handleSearch(e: any) { // usar no primeiro input
    const filterValue = e.target.value;
    setFilter(filterValue);
    const filterDataInput = apiData.results && apiData.results
      .filter((planet: any) => planet.name.includes(filterValue))
      .map((planet: any, index: number) => (
        planetCard(planet, index)
      ));
    setDataShow(filterDataInput);
  }
  // const data =
  function handleDetailSearch() {
    setDataShow(filtereSelect);
    handleCombineFilters();
    const filteredPlanets = filteredData.map((planet: any, index: number) => (
      planetCard(planet, index)
    ));

    // Adicione o estado atual de dataShow ao histórico
    setDataShowHistory((prev) => [...prev, dataShow]);

    // Atualize dataShow com os novos dados filtrados
    setDataShow(filteredPlanets);
  }

  function handleSearchColumn(e: any) {
    const columnValue = e.target.value;
    setSelectedColumn(columnValue);
    console.log(columnValue);
  }

  function handleSearchOperator(e: any) {
    const operatorValue = e.target.value;
    let newOperator = '';

    switch (operatorValue) {
      case 'maior que':
        newOperator = 'maior_que';
        break;
      case 'menor que':
        newOperator = 'menor_que';
        break;
      default:
        newOperator = 'igual';
        break;
    }

    setSelectedOperator(newOperator);
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  const operators = {
    maior_que: 'maior que',
    menor_que: 'menor que',
    igual: 'igual a',
  };

  function handleCombineFilters() {
    const newFilter = {
      coluna: selectedColumn,
      operador: selectedOperator,
      valor: inputValue,
    };

    const isColumnAlreadyIncluded = combinedFilters
      .some((filtro) => filtro.coluna === newFilter.coluna);

    if (!isColumnAlreadyIncluded) {
      // Crie uma cópia da lista original de colunas
      const updatedColumns = [...selectColumn];
      // Encontre o índice da coluna selecionada
      const columnIndex = updatedColumns.indexOf(selectedColumn);
      // Remova a coluna selecionada da lista
      updatedColumns.splice(columnIndex, 1);
      // Atualize o estado com a nova lista de colunas
      setSelectColumn(updatedColumns);

      // Adicione o novo filtro aos filtros combinados
      setCombinedFilters((prevCombinedFilters) => [...prevCombinedFilters, newFilter]);
    }
  }
  function handleExcludeFilter(indexToRemove: number) {
    const updatedFilters = [...combinedFilters];
    updatedFilters.splice(indexToRemove, 1);
    setCombinedFilters(updatedFilters);

    // Restaurar dataShow para o estado anterior
    const previousDataShow = dataShowHistory[dataShowHistory.length - 1];
    setDataShowHistory((prev) => prev.slice(0, -1)); // Remover o último estado do histórico

    // Se ainda houver filtros, atualize dataShow com o estado anterior, caso contrário, use initialValue
    const newDataShow = updatedFilters.length > 0 ? previousDataShow : initialValue;
    setDataShow(newDataShow);
  }
  function handleExcludeAllFilters() {
    setCombinedFilters([]);
    setDataShow(initialValue);
  }

  return (
    <div>
      <input
        type="text"
        value={ filter }
        data-testid="name-filter"
        onChange={ handleSearch }
      />
      Coluna
      <select
        name=""
        // value={ selectedColumn }
        id="coluna"
        data-testid="column-filter"
        onChange={ handleSearchColumn }
      >
        {selectColumn.map((column, index) => {
          return (
            <option key={ index }>{column}</option>
          );
        })}
      </select>
      Operador
      <select
        // value={  }
        onChange={ handleSearchOperator }
        name=""
        id="operador"
        data-testid="comparison-filter"
      >
        <option label="maior que" value="maior que">maior que</option>
        <option label="menor que" value="menor que">menor que</option>
        <option label="igual a" value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ inputValue }
        onChange={ (e) => setInputValue(e.target.value) }
        data-testid="value-filter"
      />
      <button
        onClick={ handleDetailSearch }
        data-testid="button-filter"
      >
        FILTRAR
      </button>
      <button
        data-testid="button-remove-filters"
        onClick={ handleExcludeAllFilters }
      >
        REMOVER FILTROS

      </button>
      <div>
        {combinedFilters.map((filtro, index) => (
          <p key={ index }>
            {filtro.coluna}
            {' '}
            {' '}
            {operators[filtro.operador]}
            {' '}
            {' '}
            {filtro.valor}
            <p data-testid="filter">
              <button
                onClick={ () => handleExcludeFilter(index) }
              >
                X

              </button>
            </p>
          </p>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {dataShow}
        </tbody>
      </table>

    </div>
  );
}
export default App;
