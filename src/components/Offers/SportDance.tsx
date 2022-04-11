import React from "react";
import Offers from "./Offers";
import OffersTwo from "./OffersTwo";
import Header from "./Header";
import offerData from "../../offerData.json";
import { useWindowWidth } from "../utilities/hooks/useWindowWidth";

const SportDance: React.FC = () => {
  const windowWidth = useWindowWidth();
  const getIDHandler = (word: string | undefined): any => {
    let newWord: any;
    let newWordSec: any;
    if (word) {
      newWord = word.split(" ")[0];
      newWordSec = word.split(" ")[1];
      return `${newWord}${newWordSec ? newWordSec : ""}`;
    }
  };

  return (
    <>
      <Header
        menuNav={true}
        image="static/assets/sportdance.jpg"
        title="Taniec sportowy"
        desc="solo i w parze"
        menu={{
          latino: "Grupa Sportowa",
          proAM: "Pro-Am",
          showDance: "Pokazy taneczne",
        }}
        windowWidth={windowWidth}
      />
      {offerData.offer.map((item) => {
        if (
          item.category === "taniecsportowy" &&
          windowWidth &&
          windowWidth < 825
        ) {
          return (
            <Offers
              id={getIDHandler(item.title)}
              title={item.title}
              subtitle={item.subtitle}
              desc={item.desc}
              image={item.url}
            />
          );
        }
        if (
          item.category === "taniecsportowy" &&
          offerData.offer.indexOf(item) % 2 === 0 &&
          windowWidth &&
          windowWidth >= 825
        ) {
          return (
            <Offers
              id={getIDHandler(item.title)}
              title={item.title}
              subtitle={item.subtitle}
              desc={item.desc}
              image={item.url}
            />
          );
        }
        if (
          item.category === "taniecsportowy" &&
          offerData.offer.indexOf(item) % 2 === 1 &&
          windowWidth &&
          windowWidth >= 825
        ) {
          return (
            <OffersTwo
              id={getIDHandler(item.title)}
              title={item.title}
              subtitle={item.subtitle}
              desc={item.desc}
              image={item.url}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default SportDance;
