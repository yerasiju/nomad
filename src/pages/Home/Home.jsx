import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const dishes = [
    { id: 1, name: "Beshbarmak", image: "/public/images/beshbarmakk.jpg" },
    { id: 2, name: "Kurt", image: "/public/images/kuyrdakk.jpg" },
    { id: 3, name: "Plov", image: "/public/images/plovv.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + dishes.length) % dishes.length);
  };

  return (
    <>
      <div className={styles.heroSection}>
        <div
          className={styles.carousel}
          style={{ backgroundImage: `url(${dishes[currentSlide].image})` }}
        >
          <button onClick={prevSlide} className={styles.navButton}>
            ❮
          </button>
          <div className={styles.overlay}>
            <h1 className={styles.welcomeText}>
              Discover the Flavors of Kazakhstan
            </h1>
            <button
              className={styles.ctaButton}
              onClick={() => (window.location.href = "/dishes")}
            >
              Explore Dishes
            </button>
          </div>
          <button onClick={nextSlide} className={styles.navButton}>
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
