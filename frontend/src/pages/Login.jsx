import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow flex items-center w-full justify-center bg-slate-300">
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-center text-2xl font-bold text-red-700 mb-8">
              Login
            </h2>
            <form className="flex flex-col gap-5">
              <input
                className="w-full text-lg p-3 rounded-md outline-none bg-slate-200 shadow-sm"
                type="email"
                placeholder="Enter Email"
                required
              />
              <input
                className="w-full text-lg p-3 rounded-md outline-none bg-slate-200 shadow-sm"
                type="password"
                placeholder="Password"
                required
              />

              <div className="flex justify-between text-sm text-blue-600">
                <a href="#">Register</a>
                <Link to="/Forget_password">Forgot Password</Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-red-500 text-white text-xl font-semibold hover:bg-red-600 hover:scale-105 transition-transform duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
