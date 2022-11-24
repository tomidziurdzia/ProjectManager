const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-500 font-black text-3xl text-center">
        Reestablece tu password y administra tus proyectos
      </h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label className="text-gray-600 block font-bold" htmlFor="password">
            Nuevo Password
          </label>
          <input
            type="password"
            placeholder="Ingrese tu nuevo password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="password"
          />
        </div>

        <input
          type="submit"
          value="Recuperar Cuenta"
          className="bg-sky-500 w-full text-white py-3 font-bold rounded hover:cursor-pointer hover:bg-sky-600 transition-colors"
        />
      </form>
    </>
  );
};

export default NuevoPassword;
