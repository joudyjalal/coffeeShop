import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    title: "Caffe Latte",
    description:
      "Pure, bold, and intensely aromatic for a deep, authentic coffee experience",
    price: "Rs. 200",
    image: coffee2,
    isLiked: false,
  },
  {
    id: 3,
    title: "Caramel Macchiato",
    description:
      "Smooth and creamy, crafted with love and expert brewing to brighten your day",
    price: "Rs. 200",
    image: coffee3,
    isLiked: false,
  },
  {
    id: 4,
    title: "Dark Mocha",
    description:
      "Dark roast perfection with a warm, comforting finish in every single sip",
    price: "Rs. 200",
    image: coffee4,
    isLiked: false,
  },
];

export default function Products() {
  const navigate = useNavigate();

  const [products, setproducts] = useState(() => {
    const savedproducts = localStorage.getItem("products");
    return savedproducts ? JSON.parse(savedproducts) : productsData;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const toggleLike = (id) => {
    setproducts(
      products.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item,
      ),
    );
  };

  const [orderedProduct, setOrderedProduct] = useState(null);

  const handleOrder = (productTitle) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login");
    } else {
      setOrderedProduct(productTitle);
    }
  };

  return (
    <section id="coffee" className="bg-[#f1f0ee] py-16 px-4 sm:px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#1C1817] uppercase mb-12">
          OUR SPECIAL COFFEE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-0 sm:px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#eeebe6] text-[#1C1817] rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-6 right-6 z-10 text-white/90 hover:text-red-500 transition-colors cursor-pointer"
              >
                {product.isLiked ? (
                  <FaHeart className="text-red-500 text-lg" />
                ) : (
                  <FaRegHeart className="text-lg drop-shadow-md" />
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
                <button
                  onClick={() => handleOrder(product.title)}
                  className="bg-[#2A1711] hover:bg-[#1C1817] text-white text-xs px-4 py-2 rounded-full font-medium transition-colors cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

       {orderedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-[#eeebe6] text-[#1C1817] p-6 md:p-8 rounded-2xl shadow-xl max-w-sm w-full text-center space-y-4 border border-[#e2d9c8]">
              <h3 className="font-serif text-xl font-bold tracking-wide">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Thank you! Your order for {orderedProduct} has been received and will be prepared soon.
              </p>
              <button
                onClick={() => setOrderedProduct(null)}
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