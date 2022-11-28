import { useState } from "react";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";

const FormularioProyecto = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [cliente, setCliente] = useState("");

  const { alerta, mostrarAlerta, submitProyecto } = useProyectos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    // Pasar los datos hacia el provider, paso los datos
    submitProyecto({ nombre, descripcion, fechaEntrega, cliente });
  };

  const { msg } = alerta;

  return (
    <form
      action=""
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta={alerta} />}
      <div className="mb-5">
        <label htmlFor="nombre" className="text-gray-600 font-bold text-m">
          Nombre Proyecto
        </label>
        <input
          id="nombre"
          type="text"
          className="border w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
          placeholder="Nombre del proyecto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="descripcion" className="text-gray-600 font-bold text-m">
          Descripcion Proyecto
        </label>
        <textarea
          id="descripcion"
          className="border w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
          placeholder="Descripcion del proyecto"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="fecha-entrega"
          className="text-gray-600 font-bold text-m"
        >
          Fecha Entrega
        </label>
        <input
          id="fecha-entrega"
          type="date"
          className="border w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
          value={fechaEntrega}
          onChange={(e) => setFechaEntrega(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="cliente" className="text-gray-600 font-bold text-m">
          Nombre Cliente
        </label>
        <input
          id="cliente"
          type="text"
          className="border w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
          placeholder="Nombre del cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Crear Proyecto"
        className="bg-sky-500 p-3 w-full font-bold text-white rounded hover:cursor-pointer hover:bg-sky-600 transition-colors"
      />
    </form>
  );
};

export default FormularioProyecto;
