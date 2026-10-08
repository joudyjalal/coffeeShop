import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import coffeeLeft from "../assets/Beans-left (1).png";
import coffeeRight from "../assets/Beans-right.png";

export default function Newsletter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login");
    } else if (email.trim() !== "") {
      setShowModal(true);
    }
  };

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

      <div className="relative z-10 max-w-2xl mx-auto text-center px-4 sm:px-6 space-y-3">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#2B1B12] tracking-tight">
          Join in and get 15% off!
        </h2>

        <p className="text-xs md:text-sm text-[#6B6560] font-medium pb-2">
          Subscribe to our newsletter and get 15% off discount code.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto w-full"
        >
          <div className="relative flex-1 w-full">
            <span className="absolute inset-y-0 left-4 flex items-center text-[#2B1B12]">
              <FaEnvelope className="text-base" />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full pl-11 pr-5 py-2.5 rounded-full bg-[#F1F0EE] text-xs font-medium text-[#2B1B12] placeholder-gray-500 focus:outline-none shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-[#2B1B12] text-white px-7 py-2.5 rounded-full text-xs font-semibold hover:bg-black transition-colors cursor-pointer shadow-sm shrink-0 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-[#eeebe6] text-[#1C1817] p-6 md:p-8 rounded-2xl shadow-xl max-w-sm w-full text-center space-y-4 border border-[#e2d9c8]">
            <h3 className="font-serif text-xl font-bold tracking-wide">
              Thank You for Subscribing!
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We will send you your 15% discount code shortly.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                setEmail("");
              }}
              className="w-full bg-[#2A1711] hover:bg-[#1C1817] text-white text-xs py-2.5 rounded-md font-medium transition-colors cursor-pointer shadow"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
