import {
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import dessert1 from "../assets/dessert1.png";
import dessert2 from "../assets/dessert2.png";
import dessert3 from "../assets/dessert3.png";
import dessert4 from "../assets/dessert4.png";

const dessertsData = [
  {
    id: 1,
    title: "Lungo coffee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    price: "Rs. 200",
    image: dessert1,
    isLiked: false,
  },
  {
    id: 2,
    title: "Lungo coffee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    price: "Rs. 200",
    image: dessert2,
    isLiked: false,
  },
  {
    id: 3,
    title: "Lungo coffee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    price: "Rs. 200",
    image: dessert3,
    isLiked: false,
  },
  {
    id: 4,
    title: "Lungo coffee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    price: "Rs. 200",
    image: dessert4,
    isLiked: false,
  },
];

export default function Desserts() {
  return (
    <section id="dessert" className="bg-[#f1f0ee] py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#1C1817] uppercase mb-12">
          OUR SPECIAL DESSERT
        </h2>

        <div className="relative flex items-center justify-center">
          <button className="absolute -left-4 md:-left-8 z-10 w-10 h-10 rounded-full bg-[#E5DDD0] text-[#1C1817] flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer">
            <FaChevronLeft className="text-sm" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
            {dessertsData.map((item) => (
              <div
                key={item.id}
                className="bg-[#eeebe6] text-[#1C1817] rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <button className="absolute top-6 right-6 z-10 text-white/90 hover:text-red-500 transition-colors cursor-pointer">
                  {item.isLiked ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-lg" />
                  )}
                </button>

                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 mb-4">
                  <h3 className="font-serif text-lg font-bold tracking-wide text-[#1C1817]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold text-[#1C1817]">
                    {item.price}
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
