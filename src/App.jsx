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
        <Route path="/nomad" element={<Home />} />
        <Route path="/nomad/cooking" element={<Cooking />} />
        <Route path="/nomad/ingredients" element={<Ingredients />} />
        <Route path="/nomad/blog" element={<Blog />} />
        <Route path="/nomad/significance" element={<Significance />} />
        <Route path="/nomad/dishes" element={<Dishes />} />
        <Route path="/nomad/dish/:id" element={<DishDetails />} />
      </Routes>
    </div>
  );
};

export default App;