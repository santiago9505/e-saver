import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutC from "../components/Layout.js";
import Dashboard from "../components/Dashboard/Dashboard.js";
import Bitacora from "../components/Bitácora/Bitacora.js";
import Stocks from "../components/Stocks/Stocks.js";
import Disponible from "../components/Disponible/Disponible.js";
import Founders from "../components/Founders/Founders.js";
import Clientes from "../components/Clientes/Clientes.js";
import Cuentas from "../components/Cuentas/Cuentas.js";

function App() {
  return (
    <div className="App">
      <Router>
        <LayoutC>
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/bitacora" element={<Bitacora />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/stocks" element={<Stocks />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/disponible" element={<Disponible />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/founders" element={<Founders />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/clientes" element={<Clientes />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/cuentas" element={<Cuentas />}></Route>
          </Routes>
        </LayoutC>
      </Router>
    </div>
  );
}

export default App;
