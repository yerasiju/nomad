import React from "react";
import styles from "./Reserve.module.css";
import Reservation from "../../components/Reservation/Reserve";

const Blog = () => {
  return (
    <>
      <div className={styles.reserveContainer}>
        <div className={styles.introSection}>
          <h2 className={styles.introTitle}>
            Discover the Flavors of Kazakh Cuisine
          </h2>
          <div className={styles.gg}>
            <div className={styles.introContent}>
              <p className={styles.introText}>
                Step into the heart of nomadic tradition with a dining
                experience like no other. Our Kazakh cuisine brings you the
                rich, hearty flavors of the steppe, crafted from age-old recipes
                passed down through generations.
                <br />
                Indulge in dishes that reflect the essence of a nomadic
                lifestyle nourishing, flavorful, and unforgettable. From the
                tender, slow-cooked perfection of Beshbarmak to the unique tang
                of Kurt, each bite tells a story of tradition and adventure.
                Reserve your table today and embark on a culinary journey
                through the vibrant and timeless flavors of Kazakhstan. Let us
                share the warmth and hospitality of our culture with you!
              </p>
            </div>

            <img
              src="https://img.qazmonitor.com/E2V8FS8HytaKQs_botlEuz10gUe3Mt3-dqFftRSQE7c/dpr:1.75/rs:fit:530:320/el:true/f:webp/czM6Ly9rYXptb25pdG9yL2ltZy9hODU1OTFlZDljNGNmZjk1NmZlMWFiMzI2MTQ4Yjk0MS5wbmc"
              alt=""
              className={styles.sectionImage}
            ></img>
          </div>
        </div>
        <Reservation></Reservation>
      </div>
    </>
  );
};
export default Blog;
