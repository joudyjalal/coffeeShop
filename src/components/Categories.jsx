import {
  FaCoffee,
  FaMugHot,
  FaGlassWhiskey,
  FaBirthdayCake,
} from "react-icons/fa";

const categoriesData = [
  {
    id: 1,
    title: "Hot Coffee",
    icon: <FaMugHot className="w-7 h-7 md:w-8 md:h-8 text-[#2B1B12]" />,
  },
  {
    id: 2,
    title: "Cold Coffee",
    icon: <FaGlassWhiskey className="w-7 h-7 md:w-8 md:h-8 text-[#2B1B12]" />,
  },
  {
    id: 3,
    title: "Cup Coffee",
    icon: <FaCoffee className="w-7 h-7 md:w-8 md:h-8 text-[#2B1B12]" />,
  },
  {
    id: 4,
    title: "Dessert",
    icon: <FaBirthdayCake className="w-7 h-7 md:w-8 md:h-8 text-[#2B1B12]" />,
  },
];

export default function Categories() {
  return (
    <section className="bg-[#EAE3D9] py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {categoriesData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center p-5 bg-[#F1F0EE]/60 hover:bg-[#F1F0EE] rounded-2xl transition-all duration-300 cursor-pointer group shadow-sm hover:shadow"
          >
            <div className="p-3 transition-transform duration-300 group-hover:-translate-y-1">
              {item.icon}
            </div>
            <h3 className="text-[#2B1B12] font-medium text-xs sm:text-sm md:text-base tracking-wide mt-1">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}