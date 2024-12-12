import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./pages/Blog/Blog";
import Ingredients from "./pages/Ingredients/Ingredients";
import Cooking from "./pages/Cooking/Cooking";
import Significance from "./pages/Significance/Significance";
import Dishes from "./pages/Dishes/Dishes";
import Home from "./pages/Home/Home";
import DishDetails from "./pages/DishDetails/DishDetails";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/significance" element={<Significance />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/dish/:id" element={<DishDetails />} />
      </Routes>
    </div>
  );
};

export default App;
