import heroBg from "../assets/coffe.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login");
    } else {
      const coffeeSection = document.getElementById("coffee");
      if (coffeeSection) {
        coffeeSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center pt-24 px-4 sm:px-6 md:px-12"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-6">
        <div className="max-w-xl text-white space-y-4 z-10">
          <span className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-300 block">
            WELCOME
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-normal leading-tight">
            We serve the richest coffee in the city!
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-sm font-light leading-relaxed">
            Crafted with passion, brewed to perfection experience the true taste
            of coffee every day
          </p>

          <div className="pt-2">
            <button
              className="bg-white text-black px-8 py-3 rounded-full font-medium text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer shadow-md"
              onClick={handleOrderClick}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
