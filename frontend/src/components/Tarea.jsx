import { formatearFecha } from "../helpers/formatearFecha";
import useProyectos from "../hooks/useProyectos";

const Tarea = ({ tarea }) => {
  const { nombre, descripcion, prioridad, fechaEntrega, _id, estado } = tarea;
  const { handleModalEditarTarea } = useProyectos();

  return (
    <div className="border-b flex justify-between items-center px-2 my-5">
      <div>
        <p className="mb-2 text-xl">{nombre}</p>
        <p className="mb-2 text-sm text-gray-500">{descripcion}</p>
        <p className="mb-2 text-sm">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-2 text-sm text-gray-600">Prioridad: {prioridad}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-indigo-500 px-4 py-3 text-white font-bold text-sm text-center rounded-lg"
          onClick={() => handleModalEditarTarea(tarea)}
        >
          Editar
        </button>
        {estado ? (
          <button className="bg-sky-500 px-4 py-3 text-white font-bold text-sm text-center rounded-lg">
            Completa
          </button>
        ) : (
          <button className="bg-gray-500 px-4 py-3 text-white font-bold text-sm text-center rounded-lg">
            Incompleta
          </button>
        )}

        <button className="bg-red-500 px-4 py-3 text-white font-bold text-sm text-center rounded-lg">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tarea;
