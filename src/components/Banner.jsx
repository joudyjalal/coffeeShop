import { FaAngleDoubleRight } from "react-icons/fa";

import beansLeft from "../assets/coffee-Beans2.png";
import beansRight from "../assets/coffee-Beans1.png";

export default function Banner() {
  return (
    <section
      id="banner"
      className="bg-category-bg py-12 px-6 md:px-12  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img
            src={beansLeft}
            alt="Hand picking coffee beans"
            className="max-h-64 md:max-h-80 object-contain"
          />
        </div>

        <div className="text-center lg:text-left space-y-6 z-10 max-w-md">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-text-primary leading-tight">
            Check Out Our Best <br /> Coffee Beans
          </h2>

          <div>
            <button className="bg-[#2B1B12] hover:bg-[#1C1817] text-white text-xs px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-colors cursor-pointer">
              <span>Explore Our Products</span>
              <FaAngleDoubleRight className="text-xs" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={beansRight}
            alt="Coffee beans scattered"
            className="max-h-64 md:max-h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
