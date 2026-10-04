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
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-page-bg text-text-primary flex flex-col justify-between">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Hero />
                <Categories />
                <Products />
                <Desserts />
                <Banner />
                <Customers />
                <Newsletter />
              </main>
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
