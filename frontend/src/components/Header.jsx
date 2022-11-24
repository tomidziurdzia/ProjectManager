import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <Link to="/proyectos">
          <h2 className="text-2xl font-black text-sky-500">Project Manager</h2>
        </Link>
        <input
          type="search"
          placeholder="Buscar Proyecto"
          className="rounded-lg lg:w-96 block p-2 border"
        />
        <div className="flex items-center gap-4">
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
