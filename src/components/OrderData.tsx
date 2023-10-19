import React from 'react';
import useOrderData from '../Hooks/useOrderData';

function OrderData({ updateDataShow }) {
  const {
    selectedColumn,
    handleColumnChange,
    selectedOption,
    handleOptionChange,
    handleOrder,
  } = useOrderData();

  return (
    <div>
      <select
        name=""
        id="coluna"
        data-testid="column-sort"
        value={ selectedColumn }
        onChange={ handleColumnChange }
      >
        {['population',
          'orbital_period',
          'diameter',
          'rotation_period',
          'surface_water'].map(
          (column, index) => (
            <option key={ index } value={ column }>
              {column}
            </option>
          ),
        )}
      </select>
      <div>
        <div>
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            value="ASC"
            checked={ selectedOption === 'ASC' }
            onChange={ () => handleOptionChange('ASC') }
          />
          Ascendente
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            value="DESC"
            checked={ selectedOption === 'DESC' }
            onChange={ () => handleOptionChange('DESC') }
          />
          Descendente
        </div>
      </div>
      <button
        data-testid="column-sort-button"
        onClick={ () => handleOrder(updateDataShow) }
      >
        ORDENAR
      </button>
    </div>
  );
}

export default OrderData;
