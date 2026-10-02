import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#2B231D] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-6 gap-8 text-xs">
        <div className="col-span-2 md:col-span-1 -mt-1">
          <h2 className="font-serif text-2xl font-normal tracking-wide text-white">
            COFFEE
          </h2>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-sm tracking-wider uppercase text-white">
            PRIVACY
          </h3>
          <ul className="space-y-2 text-white font-light">
            <li>
              <a href="#terms">Terms of use</a>
            </li>
            <li>
              <a href="#privacy">Privacy policy</a>
            </li>
            <li>
              <a href="#cookies">Cookies</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-sm tracking-wider uppercase text-white">
            SERVICES
          </h3>
          <ul className="space-y-2 text-white font-light">
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#order">Order ahead</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-sm tracking-wider uppercase text-white">
            ABOUT US
          </h3>
          <ul className="space-y-2 text-white font-light">
            <li>
              <a href="#location">Find a location</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#story">Out story</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-sm tracking-wider uppercase text-white">
            INFOTNATION
          </h3>
          <ul className="space-y-2 text-white font-light">
            <li>
              <a href="#plans">Plons & pricing</a>
            </li>
            <li>
              <a href="#sell">Sell your prodcts</a>
            </li>
            <li>
              <a href="#jobs">Jobs</a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 space-y-3">
          <h3 className="font-serif text-sm tracking-wider uppercase text-white">
            SOCIAL MEDIA
          </h3>
          <div className="flex items-center gap-4 text-base text-white pt-1">
            <a href="#twitter" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
