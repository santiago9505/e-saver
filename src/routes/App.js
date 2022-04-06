import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout.js";
import Equity from "../components/Equity.js";

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Hola</h1>
      </Layout>
    </div>
  );
}

export default App;
