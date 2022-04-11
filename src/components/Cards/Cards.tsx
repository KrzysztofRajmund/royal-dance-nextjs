import React, { useEffect, useState } from "react";
import CardsSlider from "./CardsSlider";

const Cards = () => {
  let sliderFirst: any =
    typeof document !== "undefined" && document.getElementById("slider-1");

  const [sliderContainer, setSliderContainer] = useState<any>();
  const [subcontentContainer, setSubcontentContainer] = useState<any>();

  useEffect(() => {
    setSliderContainer(document.getElementsByClassName("cards-slider")[0]);
    setSubcontentContainer(
      document.getElementsByClassName("cards-subcontent")[0]
    );
  }, []);

  return (
    <section className="cards-container">
      <article>
        <div className="cards-content">
          <h1>
            <img src="/logo2.png" alt="logo" />
          </h1>
        </div>
        <div className="cards-subcontent">
          <p>
            Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą rozrywkę?
          </p>
          <br />

          <p>Zapraszamy do naszej szkoły tańca</p>
        </div>
        <div className="cards-slider">
          <div className="sliders">
            <section className="slider slider-one" id="slider-1"></section>
          </div>
          <CardsSlider
            sliderContainer={sliderContainer}
            subcontentContainer={subcontentContainer}
            sliderFirst={sliderFirst}
          />
        </div>
      </article>
    </section>
  );
};

export default Cards;
