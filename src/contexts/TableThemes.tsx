// import { createContext, useState } from 'react';
// import { Planet } from '../components/Types';
// import useFetchApi from '../Hooks/useApi';
// import useFilter from '../Hooks/useFilter';

// type TableContextProps = {
//   children: React.ReactNode;
// };

// function TableTheme({ children }: TableContextProps) {
//   const [dataShow, setDataShow] = useState();
//   const [selectedColumn, setSelectedColumn] = useState('population');
//   const [selectedOperator, setSelectedOperator] = useState('maior_que');
//   const [inputValue, setInputValue] = useState('0');
//   const [combinedFilters, setCombinedFilters] = useState([]);
//   const { apiData } = useFetchApi();
//   const { filteredData } = useFilter(
//     selectedColumn,
//     selectedOperator,
//     parseFloat(inputValue),
//     combinedFilters,
//   );

//   const initialValue = apiData.results && apiData.results
//     .map((planet: any, index: number) => (
//       <tr key={ index }>
//         <td>{planet.name}</td>
//         <td>{planet.rotation_period}</td>
//         <td>{planet.orbital_period}</td>
//         <td>{planet.diameter}</td>
//         <td>{planet.climate}</td>
//         <td>{planet.gravity}</td>
//         <td>{planet.terrain}</td>
//         <td>{planet.surface_water}</td>
//         <td>{planet.population}</td>
//         <td>{planet.films}</td>
//         <td>{planet.created}</td>
//         <td>{planet.edited}</td>
//         <td>{planet.url}</td>
//       </tr>
//     ));
//   const filtereSelect = filteredData && filteredData.map((planet, index) => (
//     <tr key={ index }>
//       <td>{planet.name}</td>
//       <td>{planet.rotation_period}</td>
//       <td>{planet.orbital_period}</td>
//       <td>{planet.diameter}</td>
//       <td>{planet.climate}</td>
//       <td>{planet.gravity}</td>
//       <td>{planet.terrain}</td>
//       <td>{planet.surface_water}</td>
//       <td>{planet.population}</td>
//       <td>{planet.films}</td>
//       <td>{planet.created}</td>
//       <td>{planet.edited}</td>
//       <td>{planet.url}</td>
//     </tr>
//   ));

//   const filterDataInput = apiData.results && apiData.results
//     .filter((planet: any) => planet.name.includes(filterValue))
//     .map((planet: any, index: number) => (
//       <tr key={ index }>
//         <td>{planet.name}</td>
//         <td>{planet.rotation_period}</td>
//         <td>{planet.orbital_period}</td>
//         <td>{planet.diameter}</td>
//         <td>{planet.climate}</td>
//         <td>{planet.gravity}</td>
//         <td>{planet.terrain}</td>
//         <td>{planet.surface_water}</td>
//         <td>{planet.population}</td>
//         <td>{planet.films}</td>
//         <td>{planet.created}</td>
//         <td>{planet.edited}</td>
//         <td>{planet.url}</td>
//       </tr>
//     ));
// }

// export default TableTheme;
