import {
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import coffee1 from "../assets/coffe1.png";
import coffee2 from "../assets/coffe2.png";
import coffee3 from "../assets/coffe3.png";
import coffee4 from "../assets/coffe4.png";

const productsData = [
  {
    id: 1,
    title: "Lungo coffee",
    description:
      "Rich espresso with velvety foam, perfectly balanced for your daily routine",
    price: "Rs. 200",
    image: coffee1,
    isLiked: false,
  },
  {
    id: 2,
    title: "Lungo coffee",
    description:
      "Pure, bold, and intensely aromatic for a deep, authentic coffee experience",
    price: "Rs. 200",
    image: coffee2,
    isLiked: false,
  },
  {
    id: 3,
    title: "Lungo coffee",
    description:"Smooth and creamy, crafted with love and expert brewing to brighten your day"
     ,
    price: "Rs. 200",
    image: coffee3,
    isLiked: false,
  },
  {
    id: 4,
    title: "Lungo coffee",
    description:
     "Dark roast perfection with a warm, comforting finish in every single sip",
    price: "Rs. 200",
    image: coffee4,
    isLiked: false,
  },
];

export default function Products() {
  return (
    <section id="coffee" className="bg-[#f1f0ee] py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#1C1817] uppercase mb-12">
          OUR SPECIAL COFFEE
        </h2>

        <div className="relative flex items-center justify-center">
          <button className="absolute -left-4 md:-left-8 z-10 w-10 h-10 rounded-full bg-[#e2d9c8] text-[#1C1817] flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer">
            <FaChevronLeft className="text-sm" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-[#eeebe6] text-[#1C1817] rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <button className="absolute top-6 right-6 z-10 text-white/90 hover:text-red-500 transition-colors cursor-pointer">
                  {product.isLiked ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-lg" />
                  )}
                </button>

                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 mb-4">
                  <h3 className="font-serif text-lg font-bold tracking-wide text-[#1C1817]">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold text-[#1C1817]">
                    {product.price}
                  </span>
                  <button className="bg-[#2A1711] hover:bg-[#1C1817] text-white text-xs px-4 py-2 rounded-md font-medium transition-colors cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute -right-4 md:-right-8 z-10 w-10 h-10 rounded-full bg-[#e2d9c8] text-[#1C1817] flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer">
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
