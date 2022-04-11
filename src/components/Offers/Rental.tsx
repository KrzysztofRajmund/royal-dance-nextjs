import React from "react";
import Offers from "./Offers";
import Header from "./Header";
import offerData from "../../offerData.json";

const FamilyDance: React.FC = () => {
  const getIDHandler = (word: string) => {
    let newWord;
    if (word.includes(" ")) {
      newWord = word.split(" ")[0];
    } else {
      newWord = word;
    }
    return newWord;
  };

  return (
    <>
      <Header
        menuNav={false}
        image="static/assets/rental.jpg"
        title="Wynajem Studia"
        desc="Dla osób prywatnych i firm"
        menu={{}}
      />
      {offerData.offer.map((item) => {
        if (item.category === "wynajem") {
          return (
            <Offers
              id={getIDHandler(item.title)}
              title={item.title}
              subtitle={item.subtitle}
              desc={item.desc}
              image=""
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default FamilyDance;
