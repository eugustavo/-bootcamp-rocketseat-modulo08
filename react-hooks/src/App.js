import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  // Simula o state nos componentes de classe
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  // useCallback
  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  // Simula o componentDidAmount e componentWillAmount
  useEffect(() => {
    const response = localStorage.getItem('techs');

    if (response) {
      setTechs(JSON.parse(response));
    }

    // Para simular o componentWillAmount, apenas coloque uma função no final do useEffect
    // return () => {
    //   document.removeEventListener(eventos aqui)
    // }
  }, []);

  // Simula o componentDidUpdate
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  // useMemo
  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input
        type="text"
        onChange={(e) => setNewTech(e.target.value)}
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
