import { FaEnvelope } from "react-icons/fa";
import coffeeLeft from "../assets/Beans-left (1).png";
import coffeeRight from "../assets/Beans-right.png";
import { Link } from "react-router-dom";
export default function Newsletter() {
  return (
    <section className="relative w-full bg-[#E2D8C9] py-16 overflow-hidden flex items-center justify-center">
      <img
        src={coffeeLeft}
        alt="Coffee Beans Left"
        className="absolute left-0 top-0 h-full object-cover pointer-events-none select-none z-0"
      />
      <img
        src={coffeeRight}
        alt="Coffee Beans Right"
        className="absolute right-0 top-0 h-full object-cover pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6 space-y-3">
        <h2 className="font-bold text-2xl md:text-3xl text-[#2B1B12] tracking-tight">
          Join in and ger 15% off!
        </h2>

        <p className="text-xs md:text-sm text-[#6B6560] font-medium pb-2">
          Subscribe to our newsletter in get 15% off discount code.
        </p>

        <form
          onSubmit={() => <Link to="/src/components/Hero.jsx" />}
          className="flex items-center justify-center gap-3 max-w-lg mx-auto"
        >
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-4 flex items-center text-[#2B1B12]">
              <FaEnvelope className="text-base" />
            </span>
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-11 pr-5 py-2.5 rounded-full bg-[#F1F0EE] text-xs font-medium text-[#2B1B12] placeholder-gray-500 focus:outline-none shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-[#2B1B12] text-white px-7 py-2.5 rounded-full text-xs font-semibold hover:bg-black transition-colors cursor-pointer shadow-sm shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
