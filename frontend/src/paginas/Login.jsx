import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-sky-500 font-black text-3xl text-center">
        Inicia sesion y administra tus proyectos
      </h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label className="text-gray-600 block font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="email"
          />
        </div>
        <div className="my-5">
          <label className="text-gray-600 block font-bold" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="password"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesion"
          className="bg-sky-500 w-full text-white py-3 font-bold rounded hover:cursor-pointer hover:bg-sky-600 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 text-sm"
          to="registrar"
        >
          No tienes una cuenta? Registrate
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 text-sm"
          to="olvide-password"
        >
          Olvide mi password
        </Link>
      </nav>
    </>
  );
};

export default Login;
