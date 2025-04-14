import React, { useState, useEffect } from 'react';


function Relogio(props) {
    // Aqui o Relogio sempre começa 5:30 não usei a função javascript para puxar a hora atual.
    const [hora, setHora] = useState(5);
    const [minuto, setMinuto] = useState(30);
    const  [segundo, setSegundo] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            
            setSegundo(segundo + 1);
            if (segundo == 59) {
                setSegundo(0);
                setMinuto(minuto + 1);
                if (minuto == 59) {
                    setMinuto(0);
                    setHora(hora + 1);
                }
            }
        },1000);

        return () => clearInterval(interval);

    });


    return (
      <div className="Relogio">
        <h2 style={{textAlign: 'center', color: 'red'}}>{hora}:{minuto}:{segundo}</h2>
      </div>
    );
  }
  
  export default Relogio;