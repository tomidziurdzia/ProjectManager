import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { auth } = useAuth();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 ">
      <p className="text-xl font-bold">Hola: {auth.nombre}</p>
      <Link
        className="bg-sky-500 w-full p-3 text-white font-bold block mt-5 text-center rounded-lg"
        to="crear-proyecto"
      >
        Nuevo Proyecto
      </Link>
    </aside>
  );
};

export default Sidebar;
