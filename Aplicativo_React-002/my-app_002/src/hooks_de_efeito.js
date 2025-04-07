import React, { useState, useEffect } from 'react';

function ContadorComAviso() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("O contador mudou! Novo valor:", contador);
  }, [contador]); // Roda toda vez que o contador mudar    , contador é o nome do seu componente

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

export default ContadorComAviso;

// useEffect é como um "avisador automático" que você configura pra fazer alguma coisa quando algo acontece no seu componente.
