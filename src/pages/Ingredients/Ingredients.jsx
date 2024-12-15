import React from "react";
import "./Ingredients.css";

const IngredientsPage = () => {
  return (
    <div className="ingredients-page">
      <header className="ingredients-header">
        <h1>Discover the Flavors of Kazakh Cuisine</h1>
        <p>
          Explore the authentic ingredients that make Kazakh dishes unique and
          delicious.
        </p>
      </header>
      <section className="ingredients-section">
        <div className="ingredient-card">
          <h2>Common Ingredients in Kazakh Cuisine</h2>
          <p>
            Kazakh cuisine is rooted in the use of staple ingredients such as:
          </p>
          <ul>
            <li>Lamb and horse meat</li>
            <li>Wheat and barley</li>
            <li>Dairy products: sour cream, kurt, and airan</li>
          </ul>
          <p>
            These essentials are the foundation of hearty, flavorful meals that
            reflect the nomadic lifestyle.
          </p>
        </div>
        <div className="ingredient-card">
          <h2>Herbs and Spices</h2>
          <p>
            Kazakh dishes are enriched with simple yet aromatic herbs and
            spices, including:
          </p>
          <ul>
            <li>Cumin</li>
            <li>Garlic</li>
            <li>Pepper</li>
          </ul>
          <p>
            These spices enhance the natural flavors of meat and grains while
            adding depth to the cuisine.
          </p>
        </div>
        <div className="ingredient-card">
          <h2>Where to Buy Kazakh Ingredients</h2>
          <p>
            Whether you're a local, expat, or tourist, find authentic Kazakh
            ingredients at:
          </p>
          <ul>
            <li>Local markets</li>
            <li>Specialty stores</li>
            <li>Online retailers catering to Kazakh cuisine</li>
          </ul>
          <p>
            Ensure your dishes capture the true essence of Kazakhstan by using
            authentic ingredients.
          </p>
        </div>
      </section>

      <section className="ingredients-gallery">
        <h2>This ingredients used in this dishes</h2>
        <div className="gallery-grid">
          <img
            src="https://www.advantour.com/img/kazakhstan/food/kazakh-meat-dishes.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="https://www.advantour.com/img/kazakhstan/food/kazakh-laghman.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="https://www.advantour.com/img/kazakhstan/food/kazakh-manti.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="https://www.advantour.com/img/kazakhstan/food/kazakh-soups.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="https://www.advantour.com/img/kazakhstan/food/kazakh-dairy-products.jpg"
            alt=""
            className="gallery-image"
          />
          <img
            src="https://www.advantour.com/img/kazakhstan/food/kazakh-sweets.jpg"
            alt=""
            className="gallery-image"
          />
        </div>
      </section>
    </div>
  );
};

export default IngredientsPage;
