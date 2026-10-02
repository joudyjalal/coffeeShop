import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./layouts/Navbare";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Desserts from "./components/Desserts";
import Banner from "./components/Banner";
import Customers from "./components/Customers";
import Newsletter from "./components/Newsletter";
import Footer from "./layouts/Footer";
import { useState } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen bg-page-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Desserts />
        <Banner />
        <Customers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
