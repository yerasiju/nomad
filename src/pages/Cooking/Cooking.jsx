import React from "react";
import { Link } from "react-router-dom";
import "./Cooking.css";

const CookingPage = () => {
  return (
    <div className="cooking-page">
      <h1 className="cooking-page-title">Traditional Cooking Techniques</h1>
      <div className="cooking-page-content">
        <h2>Slow-Cooking over an Open Fire</h2>
        <p>
          Slow-cooking over an open fire is a traditional technique used in
          Kazakh cuisine. This method allows for the rich flavors of the
          ingredients to meld together, creating a hearty and delicious dish.
        </p>
        <img src="/nomad/images/3.jpg" alt="" />
      </div>
      <div className="cooking-page-content">
        <h2>Use of Large Cast-Iron Pots (Kazan)</h2>
        <p>
          Large cast-iron pots, known as kazan, are a staple in Kazakh cuisine.
          These pots are perfect for cooking hearty stews and soups, and are
          often used for slow-cooking over an open fire.
        </p>
        <img src="/nomad/images/2.jpg" alt="" />
      </div>
      <div className="cooking-page-content">
        <h2>Steaming Dishes</h2>
        <p>
          Steaming dishes is a common technique used in Kazakh cuisine. This
          method helps to preserve the nutrients and flavors of the ingredients,
          creating a healthy and delicious dish.
        </p>
        <img src="/nomad/images/1.jpg" alt="" />
      </div>
      <div className="cooking-page-video">
        <h2>Watch a Traditional Cooking Video</h2>
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default CookingPage;
