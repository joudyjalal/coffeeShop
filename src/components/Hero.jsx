import heroBg from "../assets/coffe.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center pt-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="max-w-xl text-white space-y-6 z-10">
          <span className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-300 block">
            WELCOME
          </span>

          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-tight">
            We serve the richest coffee in the city!
          </h1>

          <p className="text-gray-300 text-sm max-w-sm font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>

          <div className="pt-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors cursor-pointer shadow-md">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
