import React, { useState } from 'react';

function Contador() {
  // [valorAtual, funcaoParaAtualizar] = useState(valorInicial)
  const [contador, setcontador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setcontador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
