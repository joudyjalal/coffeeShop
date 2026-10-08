import { FaStar } from "react-icons/fa";
import customerImg from "../assets/Ellipse 1.png";

const testimonialsData = [
  {
    id: 1,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 4,
    image: customerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit, Lorem ipsum amet, consectetur adipisicing elit, Lorem ipsum dolor sit adipisicing elit, Lorem ipsum dolor sit dolor sit amet, consectetur adipisicing elit,",
    isCenter: false,
  },
  {
    id: 2,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 5,
    image: customerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit, Lorem ipsum amet, consectetur adipisicing elit, Lorem ipsum dolor sit adipisicing elit, Lorem ipsum dolor sit dolor sit amet, consectetur adipisicing elit,",
    isCenter: true,
  },
  {
    id: 3,
    name: "James Smith",
    role: "Entrepreneur",
    rating: 3,
    image: customerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit, Lorem ipsum amet, consectetur adipisicing elit, Lorem ipsum dolor sit adipisicing elit, Lorem ipsum dolor sit dolor sit amet, consectetur adipisicing elit,",
    isCenter: false,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F8F6F2] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-2">
          <span className="font-serif italic text-lg text-text-primary block">
            Come and Join
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-text-primary uppercase">
            OUR HAPPY CUSTOMERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className={`bg-card-bg text-text-primary rounded-2xl p-6 text-left shadow-sm transition-all duration-300 w-full ${
                item.isCenter
                  ? "md:scale-105 border border-amber-900/10 shadow-md"
                  : "opacity-90"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-text-primary">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-xs ${
                        index < item.rating ? "text-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 pt-4">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
        </div>
      </div>
    </section>
  );
}