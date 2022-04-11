import TopJumbotron from "./TopJumbotron/TopJumbotron";
import Cards from "./Cards/Cards";
// import About from './About/About';

const RoyalDance: React.FC = () => {
  return (
    <>
      {" "}
      <TopJumbotron windowWidth={1000} />
      <Cards />
    </>
  );
};

export default RoyalDance;
