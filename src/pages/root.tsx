import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";

const Root = ({ children }: any) => {
  return (
    <>
      <TopNav />
      {children}
      <Footer />
    </>
  );
};

export default Root;
