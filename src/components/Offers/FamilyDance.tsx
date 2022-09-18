import React from "react";
// import Offers from "./Offers";
// import OffersTwo from "./OffersTwo";
import Header from "./Header";
import offerData from "../../offerData.json";
import { useWindowWidth } from "../utilities/hooks/useWindowWidth";
import Meta from "../utilities/Meta";
import { OffersList } from "./OffersList";

const FamilyDance = () => {
  const windowWidth = useWindowWidth();
  // const getIDHandler = (word: string | undefined): any => {
  //   let newWord: any;
  //   let newWordSec: any;
  //   if (word) {
  //     newWord = word.split(" ")[0];
  //     newWordSec = word.split(" ")[1];
  //     return `${newWord}${newWordSec ? newWordSec : ""}`;
  //   }
  // };

  return (
    <>
      <Meta
        webUrl="https://www.royaldanceszczecin.pl/taniec-rekreacyjny"
        keywords="Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin"
        type="text"
        title="Royal Dance Szkoła Tańca"
        imageUrl="https://www.royaldanceszczecin.pl/_ipx/w_1080,q_75/%2Fstatic%2Fgallery%2Fimg11.jpg?url=%2Fstatic%2Fgallery%2Fimg11.jpg&w=1080&q=75"
        description="Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin"
        imageAlt="Szkoła Tańca Szczecin"
      />
      <Header
        menuNav={false}
        image="/static/assets/bg-black.jpg"
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
      <OffersList offerData={offerData.offer} />
      {/* {offerData.offer.map((item) => {
        if (
          item.category === "taniec-rekreacyjny" &&
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
          item.category === "taniec-rekreacyjny" &&
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
          item.category === "taniec-rekreacyjny" &&
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
      })} */}
    </>
  );
};

export default FamilyDance;
