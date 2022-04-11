import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//components
import CardsSlider from "../Cards/CardsSlider";
// import MapContact from "./MapContact";

const Contact: React.FC = () => {
  const [sliderContainer, setSliderContainer] = useState<any>();
  const [subcontentContainer, setSubcontentContainer] = useState<any>();

  useEffect(() => {
    setSliderContainer(document.getElementsByClassName("cards-slider")[0]);
    setSubcontentContainer(
      document.getElementsByClassName("cards-subcontent")[0]
    );
  }, []);
  return (
    <>
      <section className="cards-container">
        <article>
          <div className="cards-content contact-contact">
            <h1>Magdalena Geldner</h1>
            <h1>
              <a href="tel:+48-662-175-111">Tel. 662 175 111</a>
              <br />
              <a href="mailto:royaldance.szczecin@gmail.com?&subject=Royal Dance&body=Jak możemy pomóc?">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </h1>
          </div>
          <div className="cards-subcontent contact-address">
            <a
              href="https://www.google.com/maps/place/ROYALE+DANCE/@53.4417001,14.5040757,15z/data=!4m12!1m6!3m5!1s0x0:0xe7803fa7ede1f00c!2sROYALE+DANCE!8m2!3d53.4417001!4d14.5040757!3m4!1s0x0:0xe7803fa7ede1f00c!8m2!3d53.4417001!4d14.5040757"
              target="_blank"
              rel="noreferrer"
            >
              <h1>Adres</h1>
              <h1>
                Lelewela 8a
                <br />
                71-154
                <br />
                Szczecin
                <br />
              </h1>
            </a>
          </div>
          <a
            className="cards-slider map"
            href="https://www.google.com/maps/place/ROYALE+DANCE/@53.4417001,14.5040757,15z/data=!4m12!1m6!3m5!1s0x0:0xe7803fa7ede1f00c!2sROYALE+DANCE!8m2!3d53.4417001!4d14.5040757!3m4!1s0x0:0xe7803fa7ede1f00c!8m2!3d53.4417001!4d14.5040757"
            target="_blank"
            rel="noreferrer"
          >
            {/* <MapContact /> */}
          </a>
          <CardsSlider
            sliderContainer={sliderContainer}
            subcontentContainer={subcontentContainer}
          />
        </article>
      </section>
    </>
  );
};

export default Contact;
