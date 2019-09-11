import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState('');

  function handleAdd() {
    setTechs([...techs, tech]);
    setTech('');
  }

  // Array vazio é uma vez só, como se fosse o componentDidMount
  useEffect(() => {
    const techsStorage = localStorage.getItem('techs');

    if (techsStorage) {
      setTechs(JSON.parse(techsStorage));
    }

    // Como se fosse o componentDidUnmont.
    return () => {};
  }, []);

  // Vai disparar sempre que a dependencia que passar no array, sofrer alteração
  // TIpo componentDidUpdate, testando se teve alteração do estado.
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs.length]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input type="text" value={tech} onChange={e => setTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
