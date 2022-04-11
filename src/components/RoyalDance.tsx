import TopJumbotron from "./TopJumbotron/TopJumbotron";
import Cards from "./Cards/Cards";
// import About from './About/About';
import GalleryHome from "./Gallery/GalleryHome";
import HeaderHome from "./Offers/HeaderHome";
import { useWindowWidth } from "./utilities/hooks/useWindowWidth";

const RoyalDance: React.FC = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth && (
        <>
          {" "}
          <TopJumbotron windowWidth={windowWidth} />
          <HeaderHome
            image="/static/assets/sportdance.jpg"
            windowWidth={windowWidth}
            title={windowWidth < 380 ? "Taniec" : "Dołącz do Nas!"}
            desc={
              windowWidth < 445
                ? "Rekreacyjny i Sportowy"
                : "Taniec rekreacyjny i sportowy"
            }
          />
          <GalleryHome />
          {/* <About /> */}
          <Cards />
        </>
      )}
    </>
  );
};

export default RoyalDance;
