import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Cooking.css";

const Cooking = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 100 });
  }, []);

  return (
    <div className="cooking-page">
      <div className="content" data-aos="fade-up">
        <div className="cooking-page-content">
          <h2>Use of Large Cast-Iron Pots (Kazan)</h2>
          <div className="info">
            <img src="/nomad/images/2.jpg" alt="Kazan cooking" />
            <div className="info-text">
              <p>
                Large cast-iron pots, known as kazan, are a staple in Kazakh
                cuisine. These pots are perfect for cooking hearty stews and
                soups, and are often used for slow-cooking over an open fire.
              </p>
              <button>
                <a
                  href="https://youtu.be/MmGbhEnbUSM?si=kKaTBU-5jgLD7ZDg"
                  target="_blank"
                >
                  See the tutorial
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="content" data-aos="fade-right">
        <div className="cooking-page-content">
          <h2>Steaming Dishes</h2>
          <div className="info">
            <div className="info-text">
              <p>
                Steaming dishes is a common technique used in Kazakh cuisine.
                This method helps to preserve the nutrients and flavors of the
                ingredients, creating a healthy and delicious dish.
              </p>
              <button>
                <a
                  href="https://youtu.be/RDN-5-JbnTE?si=23dx8VAPR4r8uGpc"
                  target="_blank"
                >
                  See the tutorial
                </a>
              </button>
            </div>
            <img src="/nomad/images/3.jpg" alt="Steaming dishes" />
          </div>
        </div>
      </div>

      <div className="content" data-aos="fade-left">
        <div className="cooking-page-content">
          <h2>Cooking on Open Flames</h2>
          <div className="info">
            <img src="/nomad/images/1.jpg" alt="Open flames" />
            <div className="info-text">
              <p>
                Cooking over an open flame is an age-old tradition in Kazakh
                cuisine, imparting a smoky flavor that enhances meat and breads.
              </p>
              <button>
                <a
                  href="https://youtu.be/i0Nxpve927g?si=aBlUrIWFeOZfmLny"
                  target="_blank"
                >
                  Learn the technique
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="content" data-aos="zoom-in">
        <div className="cooking-page-content">
          <h2>Fermenting Dairy Products</h2>
          <div className="info">
            <div className="info-text">
              <p>
                Fermented dairy products like *airan* and *kurt* are integral to
                Kazakh diets. This technique helps preserve milk for long
                journeys across the steppe.
              </p>
              <button>
                <a
                  href="https://youtu.be/ynuVz5HiuFA?si=p0ON0QYOcwfdBfjA"
                  target="_blank"
                >
                  See the tutorial
                </a>
              </button>
            </div>
            <img src="/nomad/images/3.jpg" alt="Fermenting dairy" />
          </div>
        </div>
      </div>

      <div className="cooking-page-video" data-aos="fade-up">
        <h2>Watch a Traditional Cooking Video</h2>
        <iframe
          src="https://www.youtube.com/embed/Q_ME77BeKGE?si=FzTS1UZubjTHi1NA"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Cooking;
