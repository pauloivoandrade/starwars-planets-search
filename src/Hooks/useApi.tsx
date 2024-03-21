import React, { useState, useEffect } from 'react';

import { useFetchIngredientsData } from './seuArquivoComOHook';

export default function useFetchApi() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    delete data.residents;
    setApiData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    fetchData,
    loading,
    apiData,
  };
} // Substitua com o caminho correto para o seu arquivo

function MeuComponente() {
  const [ingrediente, setIngrediente] = useState(''); // Estado para armazenar o valor do input
  const { apiIngredients } = useFetchIngredientsData(ingrediente);

  const handleInputChange = (event) => {
    setIngrediente(event.target.value); // Atualiza o estado com o valor do input
  };

  // Restante do seu componente com um input controlado
  return (
    <div>
      <input
        type="text"
        value={ ingrediente }
        onChange={ handleInputChange }
        placeholder="Digite o ingrediente"
      />
      {/* Renderiza os dados do API conforme necessário */}
    </div>
  );
}
