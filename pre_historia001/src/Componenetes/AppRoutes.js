import { Route, Routes } from 'react-router-dom';

import Idade_Pedra from './Idade_Pedra';
import Idade_Bronze from './Idade_Bronze';
import Idade_Ferro from './Idade_Ferro';

function AppRoutes() { 
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Idade_Pedra />} />
        <Route path="/bronze" element={<Idade_Bronze />} />
        <Route path="/ferro" element={<Idade_Ferro />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;    