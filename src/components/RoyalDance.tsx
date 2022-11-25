import Cards from "./Cards/Cards";
import About from './About/About';
import Meta from "./utilities/Meta";
import TopJumbotronSlider from "./TopJumbotron/TopJumbotronSlider";

const RoyalDance = () => {
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
      <>
        <TopJumbotronSlider />
        <About />
        <Cards />
      </>
    </>
  );
};

export default RoyalDance;
