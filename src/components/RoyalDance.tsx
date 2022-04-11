import TopJumbotron from "./TopJumbotron/TopJumbotron";
import Cards from "./Cards/Cards";
// import About from './About/About';
import GalleryHome from "./Gallery/GalleryHome";
import HeaderHome from "./Offers/HeaderHome";
import { useWindowWidth } from "./utilities/hooks/useWindowWidth";
import Meta from "./utilities/Meta";

const RoyalDance: React.FC = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Meta
        webUrl="https://www.royaldanceszczecin.pl/"
        keywords="Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin"
        type="text"
        title="Royal Dance"
        description="Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin"
        imageUrl="https://www.royaldanceszczecin.pl/_ipx/w_1080,q_75/%2Fstatic%2Fgallery%2Fimg6.jpg?url=%2Fstatic%2Fgallery%2Fimg6.jpg&w=1080&q=75"
        imageAlt="Szkoła Tańca Szczecin"
      />
      {windowWidth && (
        <>
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
