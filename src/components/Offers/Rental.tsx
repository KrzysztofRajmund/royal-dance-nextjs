import React from "react";
import Offers from "./Offers";
import Header from "./Header";
import offerData from "../../offerData.json";
import Meta from "../utilities/Meta";

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
      <Meta
        webUrl="https://www.royaldanceszczecin.pl/wynajem-studia"
        keywords="Wynajem studia, wynajem sali"
        type="text image.jpg"
        title="Taniec sportowy Szczecin"
        description="Wynajem studia, Wynajem sali,  Dla osób prywatnych i firm"
        imageUrl="https://www.royaldanceszczecin.pl/_ipx/w_1080,q_75/%2Fstatic%2Fgallery%2Fimg8.jpg?url=%2Fstatic%2Fgallery%2Fimg8.jpg&w=1080&q=75"
        imageAlt="Wynajem sali"
      />
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
