import React, { useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  const dishes = [
    { id: 1, name: "Beshbarmak", image: "/nomad/images/beshbarmakk.jpg" },
    { id: 2, name: "Kurt", image: "/nomad/images/kuyrdakk.jpg" },
    { id: 3, name: "Plov", image: "/nomad/images/plovv.jpg" },
  ];

  const aboutSections = [
    {
      title: "Our Vision",
      text: "To bring the rich flavors of nomadic cuisine to the world, offering an authentic dining experience that connects people to the traditions and heritage of Kazakhstan.",
      image: "/nomad/images/shanrak.jpg",
      alt: "Vision",
    },
    {
      title: "Our Mission",
      text: "To provide a memorable dining experience by serving traditional Kazakh dishes made from locally sourced ingredients, while educating our guests about the history and culture behind each dish.",
      image: "/nomad/images/tu.jpg",
      alt: "Mission",
    },
    {
      title: "Our Philosophy",
      text: "We believe in the power of food to connect people across cultures and generations. Our dishes are inspired by the nomadic traditions of Kazakhstan, with a focus on authenticity, quality, and sustainability.",
      image: "/nomad/images/dombyra.jpg",
      alt: "Philosophy",
    },
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
            <button className={styles.ctaButton}>
              <Link to={`/nomad/dishes`}>Explore Dishes</Link>
            </button>
          </div>
          <button onClick={nextSlide} className={styles.navButton}>
            ❯
          </button>
        </div>
      </div>

      <div className={styles.introSection}>
        <img
          src="https://images.pexels.com/photos/4588816/pexels-photo-4588816.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className={styles.sectionImage}
        ></img>

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

      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>About Nomad</h1>
        {aboutSections.map((section, index) => (
          <div key={index} className={styles.aboutItem}>
            <div className={styles.aboutImage}>
              <img src={section.image} alt={section.alt} />
            </div>
            <div className={styles.aboutText}>
              <h3>{section.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
