import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dishes.module.css";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API = "https://teacher-3kzh.onrender.com";

  useEffect(() => {
    fetch(`${API}/api/dishes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dishes");
        }
        return response.json();
      })
      .then((data) => {
        setDishes(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (!dishes.length && !error && !isLoading) {
    return <p>No dishes available.</p>;
  }

  if (isLoading) {
    return <p>Loading dishes...</p>;
  }

  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className={styles.dishesContainer}>
      <h1 className={styles.title}>Kazakh Dishes</h1>
      <ul className={styles.dishesList}>
        {dishes.map((dish) => (
          <li key={dish.id} className={styles.dishItem}>
            <h2 className={styles.dishName}>{dish.name}</h2>
            <p className={styles.dishDescription}>{dish.history}</p>
            <img
              src={dish.picture_url}
              alt={dish.name}
              className={styles.dishImage}
            />
            <Link to={`/dish/${dish.id}`} className={styles.dishLink}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;
