import React, { useState } from "react";
import styles from "./Home.module.css";
import Reserve from "../../components/Reservation/Reserve";

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
              onClick={() => (window.location.href = "/nomad/dishes")}
            >
              Explore Dishes
            </button>
          </div>
          <button onClick={nextSlide} className={styles.navButton}>
            ❯
          </button>
        </div>
      </div>

      <div className={styles.introSection}>
        <h2 className={styles.introTitle}>Introduction to Kazakh Cuisine</h2>
        <div className={styles.introContent}>
          <p className={styles.introText}>
            Kazakh cuisine is deeply rooted in the traditions of the nomadic way
            of life. It is characterized by its hearty, meat-centric dishes that
            showcase the importance of horse meat and mutton, along with an
            array of dairy products and grains.
          </p>
          <p className={styles.introText}>
            Nomadic traditions have had a profound influence on Kazakh food
            culture. Meals are often prepared to be nourishing and long-lasting,
            suitable for life on the move. Signature dishes like Beshbarmak, a
            dish made with boiled meat and noodles, and Kurt, a dried cheese
            snack, are central to Kazakh culinary identity.
          </p>
        </div>
      </div>

      <Reserve></Reserve>
    </>
  );
};

export default Home;
