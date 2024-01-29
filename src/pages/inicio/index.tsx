import { Link, Outlet } from "react-router-dom";

function Inicio() {
  return (
    <>
      <p>Ruta inicio</p>
      <Link to="/productos">RUTA PRODUCTOS</Link>
      <div>1</div>
      <div>3</div>
      <div>
        CAMBIOS RUTAS
        <Outlet />
      </div>
    </>
  );
}

export default Inicio;
