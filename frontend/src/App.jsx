import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Login from "./paginas/Login";
import NuevoPassword from "./paginas/NuevoPassword";
import OlvidePassword from "./paginas/OlvidePassword";
import Registrar from "./paginas/Registrar";
import RutaProtegida from "./layouts/RutaProtegida";
import Proyectos from "./paginas/Proyectos";

import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Area Publica */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          </Route>

          {/* Area Privada */}
          <Route path="/proyectos" element={<RutaProtegida />}>
            <Route index element={<Proyectos />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
