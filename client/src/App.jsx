import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Simulador from "./routes/Simulador.jsx";
import Acerca from "./routes/Acerca.jsx";

export default function App() {
  return (
    <>
      <header>
        <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div className="brand">EcoPulse</div>
          <nav className="nav" aria-label="primary">
            <Link to="/">Inicio</Link>
            <Link to="/simulador">Simulador</Link>
            <Link to="/acerca">Acerca</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </main>

      <footer>
        <div className="container">© {new Date().getFullYear()} EcoPulse · Accesible y responsivo</div>
      </footer>
    </>
  );
}
