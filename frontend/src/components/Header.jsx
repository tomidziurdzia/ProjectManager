import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <Link to="/proyectos">
          <h2 className="text-2xl font-black mb-5 md:mb-0 text-sky-500">
            Project Manager
          </h2>
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button type="button" className="font-bold">
            Buscar Proyecto
          </button>
          <Link to="/proyectos" className="font-bold">
            Proyectos
          </Link>

          <button
            className="text-white text-sm bg-sky-500 p-2 rounded-md font-bold"
            type="button"
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
