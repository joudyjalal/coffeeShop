import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsOpen(false);
    navigate("/");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 py-6 text-white bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold tracking-wider">
          coffee
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none cursor-pointer z-30"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav className="hidden md:flex items-center mx-auto gap-8 text-xs font-semibold tracking-widest uppercase">
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

        <div className="hidden md:block w-[72px]"></div>

        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#1C1817]/95 backdrop-blur-md py-6 px-6 flex flex-col gap-5 text-xs font-semibold tracking-widest uppercase md:hidden shadow-xl border-t border-white/10">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition-opacity py-1"
            >
              HOME
            </a>
            <a
              href="#coffee"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition-opacity py-1"
            >
              COFFEE
            </a>
            <a
              href="#dessert"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition-opacity py-1"
            >
              BAKERY
            </a>
            <a
              href="#banner"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition-opacity py-1"
            >
              SHOP
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition-opacity py-1"
            >
              ABOUT
            </a>

            {currentUser ? (
              <button
                onClick={handleLogout}
                className="text-left hover:opacity-80 transition-opacity uppercase cursor-pointer py-1"
              >
                LOGOUT
              </button>
            ) : (
              <div className="flex flex-col gap-4 pt-2 border-t border-white/10">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-80 transition-opacity py-1"
                >
                  LOGIN
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-80 transition-opacity py-1"
                >
                  REGISTER
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}