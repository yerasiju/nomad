import React from "react";

const IngredientsPage = () => {
  return (
    <div className="ingredients-page">
      <h1>Ingredients in Kazakh Cuisine</h1>

      <section className="ingredients-overview">
        <h2>Common Ingredients</h2>
        <p>
          Kazakh cuisine features a variety of unique and flavorful ingredients
          that are essential to its dishes. These include:
        </p>
        <ul>
          <li>
            <strong>Lamb:</strong> A staple in many Kazakh dishes, providing a
            rich and tender flavor.
          </li>
          <li>
            <strong>Horse Meat:</strong> A traditional ingredient often used in
            special dishes like *kazy* (sausage) and *beshbarmak*.
          </li>
          <li>
            <strong>Wheat and Barley:</strong> Common grains used for bread,
            noodles, and porridges.
          </li>
          <li>
            <strong>Dairy Products:</strong> Includes sour cream, *kurt* (dried
            cheese balls), and *airan* (fermented milk).
          </li>
        </ul>
        <h3>Herbs and Spices</h3>
        <p>
          Kazakh cooking relies on a simple yet flavorful blend of spices to
          enhance its natural ingredients:
        </p>
        <ul>
          <li>
            <strong>Cumin:</strong> Adds a warm and earthy flavor to meats and
            stews.
          </li>
          <li>
            <strong>Garlic:</strong> Used in marinades and sauces for its bold
            taste.
          </li>
          <li>
            <strong>Pepper:</strong> A staple seasoning in most dishes.
          </li>
        </ul>
      </section>

      <section className="ingredients-purchase">
        <h2>Where to Buy Kazakh Ingredients</h2>
        <p>
          Whether you're a local or an expat, here are some tips for finding
          authentic Kazakh ingredients:
        </p>
        <ul>
          <li>
            <strong>Local Markets:</strong> Look for lamb, horse meat, and fresh
            herbs at local butcher shops and markets.
          </li>
          <li>
            <strong>Specialty Stores:</strong> Visit ethnic stores that carry
            Central Asian products, including dairy items like *kurt* and
            *airan*.
          </li>
          <li>
            <strong>Online Options:</strong> Platforms like{" "}
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon
            </a>{" "}
            and{" "}
            <a
              href="https://www.ebay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              eBay
            </a>{" "}
            often have dried spices, noodles, and unique ingredients.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default IngredientsPage;
