import React, { useEffect } from "react";
//react-scroll
import { Link } from "react-scroll";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  menu: {
    latino?: string;
    standard?: string;
    kids?: string;
    wedding?: string;
    proAM?: string;
    showDance?: string;
  };
}

const Menu: React.FC<Props> = ({ ...props }) => {
  useEffect(() => {
    AOS.init({
      // offset: 150,
      // duration: 800,
    });
  }, []);

  const displayFastMenu = () => {
    const targetMenuNav = document.getElementsByClassName(
      "titles-container-menu-spread"
    )[0];
    const targetMenuFast = document.getElementsByClassName(
      "titles-container-menu"
    )[0];
    targetMenuNav.classList.toggle("active");
    targetMenuFast.textContent === "Menu"
      ? (targetMenuFast.textContent = "Zamknij")
      : (targetMenuFast.textContent = "Menu");
  };

  const getIDHandler = (word: string | undefined): any => {
    let newWord: any;
    let newWordSec: any;
    if (word) {
      newWord = word.split(" ")[0];
      newWordSec = word.split(" ")[1];
      return `${newWord}${newWordSec ? newWordSec : ""}`;
    }
  };

  let data = Object.values(props.menu);
  const loopObject = data.map((item, key) => {
    return (
      <h4 className="titles-subtitle">
        <Link
          key={key}
          to={getIDHandler(item)}
          duration={650}
          spy={true}
          smooth={true}
          offset={-150}
          onClick={displayFastMenu}
        >
          {item}
        </Link>
      </h4>
    );
  });

  return (
    <React.Fragment>
      <article className="titles-container titles-container-sticky">
        <section className="titles-container-menu" onClick={displayFastMenu}>
          Menu
        </section>
        <div className="titles-container-menu-spread">
          <div className="titles-container-menu-spread-card">{loopObject}</div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Menu;
