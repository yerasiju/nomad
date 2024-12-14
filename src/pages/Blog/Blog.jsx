import React from "react";
import styles from "./Reserve.module.css";
import Reservation from "../../components/Reservation/Reserve";

const Blog = () => {
  return (
    <>
      <div className={styles.reserveContainer}>
        <div className={styles.introSection}>
          <img
            src="https://images.pexels.com/photos/4588816/pexels-photo-4588816.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className={styles.sectionImage}
          ></img>

          <h2 className={styles.introTitle}>Introduction to Kazakh Cuisine</h2>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              Kazakh cuisine is deeply rooted in the traditions of the nomadic
              way of life. It is characterized by its hearty, meat-centric
              dishes that showcase the importance of horse meat and mutton,
              along with an array of dairy products and grains.
            </p>
            <p className={styles.introText}>
              Nomadic traditions have had a profound influence on Kazakh food
              culture. Meals are often prepared to be nourishing and
              long-lasting, suitable for life on the move. Signature dishes like
              Beshbarmak, a dish made with boiled meat and noodles, and Kurt, a
              dried cheese snack, are central to Kazakh culinary identity.
            </p>
          </div>
        </div>
        <Reservation></Reservation>
      </div>
    </>
  );
};
export default Blog;
