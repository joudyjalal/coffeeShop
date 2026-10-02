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
    icon: <FaMugHot className="w-8 h-8 text-text-primary" />,
  },
  {
    id: 2,
    title: "Cold Coffee",
    icon: <FaGlassWhiskey className="w-8 h-8 text-text-primary" />,
  },
  {
    id: 3,
    title: "Cup Coffee",
    icon: <FaCoffee className="w-8 h-8 text-text-primary" />,
  },
  {
    id: 4,
    title: "Dessert",
    icon: <FaBirthdayCake className="w-8 h-8 text-text-primary" />,
  },
];

export default function Categories() {
  return (
    <section className="bg-[#EAE3D9] py-12 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {categoriesData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center space-y-3 cursor-pointer group"
          >
            <div className="p-3 transition-transform duration-300 group-hover:-translate-y-1">
              {item.icon}
            </div>
            <h3 className="text-text-primary font-medium text-sm md:text-base tracking-wide">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
