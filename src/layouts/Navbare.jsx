import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 py-6 text-white bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center ">
        <div className="text-2xl font-serif font-bold tracking-wider">
          coffee
        </div>

        <nav className=" flex items-center ml-70  gap-8 text-xs font-semibold tracking-widest uppercase">
          <a href="#home" className="hover:opacity-80 transition-opacity">
            HOME
          </a>
          <a href="#coffee" className="hover:opacity-80 transition-opacity">
            COFFEE
          </a>
          <a href="#dessert" className="hover:opacity-80 transition-opacity">
            BAKERY
          </a>
          <a href="#banner" className="hover:opacity-80 transition-opacity">
            SHOP
          </a>
          <a href="#about" className="hover:opacity-80 transition-opacity">
            ABOUT
          </a>

          {currentUser ? (
            <button
              onClick={handleLogout}
              className="hover:opacity-80 transition-opacity uppercase cursor-pointer"
            >
              LOGOUT
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:opacity-80 transition-opacity">
                LOGIN
              </Link>
              <Link to="/register" className="hover:opacity-80 transition-opacity">
                REGISTER
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
