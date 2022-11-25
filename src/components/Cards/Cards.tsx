import React, { useEffect, useState } from "react";
import CardsSlider from "./CardsSlider";
import Image from "next/image";

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
          <div className="cards-content-logo">
            <Image
              src="/static/assets/logo2.png"
              alt="logo"
              objectFit="contain"
              layout="fill"
            />
          </div>
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
