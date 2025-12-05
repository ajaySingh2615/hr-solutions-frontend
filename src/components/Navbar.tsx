import { Link } from "react-router-dom";
import { isLoggedIn, logout } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userLoggedIn = isLoggedIn();

  const handleLogout = () => {
    logout();
    navigate("/login");
    window.location.reload(); // Quick refresh to update UI state
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-700">
            TalentForge
          </span>
        </Link>

        {/* Buttons (Right Side) */}
        <div className="flex md:order-2 space-x-3">
          {userLoggedIn ? (
            <>
              <Link to="/dashboard">
                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 mr-2">
                  Dashboard
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2 md:mb-0">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-0 md:mr-0">
                  Get Started
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Links (Center) */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
