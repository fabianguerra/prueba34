import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/inicio";
import Login from "./pages/inicio/login";
import RickMorty from "./pages/Rick/RickMorty";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />}>
        <Route path="rick" element={<RickMorty />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
