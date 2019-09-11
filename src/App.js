import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReacjJS', 'ReactNative']);
  const [tech, setTech] = useState('');

  function handleAdd() {
    setTechs([...techs, tech]);
    setTech('');
  }

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input type="text" value={tech} onChange={e => setTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
