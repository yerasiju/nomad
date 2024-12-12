import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DishDetails.module.css";

const DishDetails = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API = "https://teacher-3kzh.onrender.com";

  useEffect(() => {
    fetch(`${API}/api/dishes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dish details");
        }
        return response.json();
      })
      .then((data) => {
        setDish(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading dish details...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!dish) {
    return <p>Dish not found.</p>;
  }

  return (
    <div className={styles.dishDetails}>
      <h1 className={styles.dishName}>{dish.name}</h1>
      <img
        src={dish.picture_url}
        alt={dish.name}
        className={styles.dishImage}
      />
      <p className={styles.dishHistory}>{dish.history}</p>
      <h3>Ingredients</h3>
      <ul>
        {dish.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Recipe</h3>
      <p>{dish.recipe}</p>
      <h3>Instructions</h3>
      <ul>
        {dish.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default DishDetails;
