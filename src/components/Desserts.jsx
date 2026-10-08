import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import dessert1 from "../assets/dessert1.png";
import dessert2 from "../assets/dessert2.png";
import dessert3 from "../assets/dessert3.png";
import dessert4 from "../assets/dessert4.png";

const initialDesserts = [
  {
    id: 1,
    title: "Classic Chocolate Cake",
    description:
      "Rich, moist layers of chocolate sponge with smooth velvety ganache",
    price: "Rs. 200",
    image: dessert1,
    isLiked: false,
  },
  {
    id: 2,
    title: "Creamy Cheesecake",
    description:
      "New York style smooth cheesecake with a buttery graham cracker crust",
    price: "Rs. 200",
    image: dessert2,
    isLiked: false,
  },
  {
    id: 3,
    title: "French Croissant",
    description:
      "Flaky, buttery, freshly baked pastry with a golden crisp exterior",
    price: "Rs. 200",
    image: dessert3,
    isLiked: false,
  },
  {
    id: 4,
    title: "Tiramisu Delight",
    description:
      "Traditional Italian dessert layered with coffee-soaked ladyfingers and mascarpone",
    price: "Rs. 200",
    image: dessert4,
    isLiked: false,
  },
];

export default function Desserts() {
  const navigate = useNavigate();

  const [desserts, setDesserts] = useState(() => {
    const savedDesserts = localStorage.getItem("desserts");
    return savedDesserts ? JSON.parse(savedDesserts) : initialDesserts;
  });

  useEffect(() => {
    localStorage.setItem("desserts", JSON.stringify(desserts));
  }, [desserts]);

  const toggleLike = (id) => {
    setDesserts(
      desserts.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item,
      ),
    );
  };

  const [orderedDessert, setOrderedDessert] = useState(null);

  const handleOrder = (productTitle) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login");
    } else {
      setOrderedDessert(productTitle);
    }
  };

  return (
    <section id="dessert" className="bg-[#f1f0ee] py-16 px-4 sm:px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#1C1817] uppercase">
            OUR SPECIAL DESSERT
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-0 sm:px-4">
            {desserts.map((item) => (
              <div
                key={item.id}
                className="bg-[#eeebe6] text-[#1C1817] rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-6 right-6 z-10 text-white hover:text-red-500 transition-colors cursor-pointer"
                >
                  {item.isLiked ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-lg drop-shadow-md" />
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
                  <button
                    className="bg-[#2A1711] hover:bg-[#1C1817] text-white text-xs px-4 py-2 rounded-full font-medium transition-colors cursor-pointer"
                    onClick={() => handleOrder(item.title)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {orderedDessert && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-[#eeebe6] text-[#1C1817] p-6 md:p-8 rounded-2xl shadow-xl max-w-sm w-full text-center space-y-4 border border-[#e2d9c8]">
              <h3 className="font-serif text-xl font-bold tracking-wide">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Thank you! Your order 
                has been
                received and will be prepared soon.
              </p>
              <button
                onClick={() => setOrderedDessert(null)}
                className="w-full bg-[#2A1711] hover:bg-[#1C1817] text-white text-xs py-2.5 rounded-full font-medium transition-colors cursor-pointer shadow"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}