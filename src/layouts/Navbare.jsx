export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 py-6 text-white bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold tracking-wider">
          coffee
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
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
          <a href="#login" className="hover:opacity-80 transition-opacity">
            LOGIN
          </a>
        </nav>

        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
