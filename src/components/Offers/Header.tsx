import React, { useEffect, useState } from "react";
import anime from "animejs";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Menu from "./Menu";
import { useWindowWidth } from "../utilities/hooks/useWindowWidth";

const fontJosefin = "'Josefin Sans', sans-serif";
const fontPoppin = "'Poppins', sans-serif";
const useStyles = makeStyles<Theme, Props>((theme) => ({
  root: {
    position: "relative",
    width: "100vw",
    margin: "0",
    // [theme.breakpoints.down(450)]: {
    //     height: "100%",
    // },
  },

  paperCard: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

interface Props {
  image: string;
  title: string;
  desc: string;
  menuNav: boolean;
  menu: {
    latino?: string;
    standard?: string;
    kids?: string;
    wedding?: string;
    proAM?: string;
    showDance?: string;
  };
  windowWidth?: number | undefined;
}

const Header: React.FC<Props> = ({ ...props }) => {
  const classes = useStyles(props);
  const [loading, setLoading] = useState(false);
  const windowWidth = useWindowWidth();
  const isOfferList = props.title === "Taniec rekreacyjny" || props.title === "Taniec sportowy"

  useEffect(() => {
    setLoading(true);
  }, []);

  if (loading) {
    var entranceTitle: any = document.querySelector(".entrance-title");
    const regex = /\S/g;
    entranceTitle.innerHTML = entranceTitle.textContent.replace(
      regex,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".entrance-title .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 6000,
      delay: (el, i) => 500 + 30 * i,
    });
  }

  if (loading) {
    var entranceSubtitle: any = document.querySelector(".entrance-subtitle");
    const regex = /\S/g;
    entranceSubtitle.innerHTML = entranceSubtitle.textContent.replace(
      regex,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".entrance-subtitle .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 6000,
      delay: (el, i) => 3000 + 30 * i,
    });
  }
  return (
    <div className={classes.root} style={{ height: isOfferList ? "20vh" : '60vh' }}>
      <Paper
        square
        variant="outlined"
        className={classes.paperCard}
        style={{
          backgroundImage: `url(${props.image})`,
          width: "100vw",
          height: isOfferList ? "20vh" : '60vh',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="header-container">
          <article>
            <div className="entrance" style={{ marginBottom: isOfferList ? "90px" : '0px', }}>
              <h1 className="entrance-title"> {props.title}</h1>
              <h5 className="entrance-subtitle">
                {props.desc.length >= 20 &&
                  props.windowWidth &&
                  props.windowWidth < 445
                  ? ""
                  : props.desc}
              </h5>
            </div>
          </article>
        </div>
      </Paper>
      {props.menuNav && <Menu menu={props.menu} />}
    </div>
  );
};

export default Header;
