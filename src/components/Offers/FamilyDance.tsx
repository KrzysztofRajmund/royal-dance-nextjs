import React from "react";
import Offers from "./Offers";
import OffersTwo from "./OffersTwo";
import Header from "./Header";
import offerData from "../../offerData.json";
import { useWindowWidth } from "../utilities/hooks/useWindowWidth";

const FamilyDance = () => {
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
        image="/static/assets/rd-gif.gif"
        title="Taniec rekreacyjny"
        desc="w każdej grupie wiekowej"
        menu={{
          latino: "Dla Kobiet",
          standard: "Dla Dorosłych",
          kids: "Dla Dzieci",
          wedding: "Pierwszy Taniec",
        }}
        windowWidth={windowWidth}
      />
      {offerData.offer.map((item) => {
        if (
          item.category === "taniecrekreacyjny" &&
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
          item.category === "taniecrekreacyjny" &&
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
          item.category === "taniecrekreacyjny" &&
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

export default FamilyDance;
