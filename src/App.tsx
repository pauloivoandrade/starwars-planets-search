import React from 'react';
import './App.css';
import useFetchApi from './Hooks/useApi';

function App() {
  const { fetchData, loading, apiData } = useFetchApi('https://swapi.dev/api/planets');
  // const chaves = (apiData.results).map((chave) => {
  //   return Object.keys(chave);
  // });
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div>
      {/* {apiData.results?.map((result, index) => (
        <div key={ index }>
          {Object.keys(result).map((key) => (
            <div key={ key }>
              <strong>
                { key }
                :
              </strong>
              {' '}
              { result[key] }
            </div>
          ))}
        </div>
      ))} */}
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
          {apiData.results && apiData.results.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
export default App;
