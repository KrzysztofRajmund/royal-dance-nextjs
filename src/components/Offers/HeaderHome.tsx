import React, { useEffect, useState } from "react";
//anime
import anime from "animejs";
//material-ui
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";

const fontJosefin = "'Josefin Sans', sans-serif";
const fontPoppin = "'Poppins', sans-serif";
const useStyles = makeStyles<Theme, Props>((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    margin: "0",
  },
  paperCard: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

interface Props {
  image: string;
  title: string;
  desc: string;
  windowWidth: number;
}

const HeaderHome = ({ ...props }: Props) => {
  const classes = useStyles(props);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    AOS.init({
      offset: 150,
      duration: 1200,
    });
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
    <div className={classes.root}>
      <Paper
        square
        variant="outlined"
        className={classes.paperCard}
        style={{
          backgroundImage: `url(${props.image})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="header-container">
          <article>
            <div
              data-aos={props.windowWidth < 445 ? "zoom-in" : "fade-left"}
              className="entrance"
            >
              <h1 className="entrance-title"> {props.title}</h1>
              <h5 className="entrance-subtitle">{props.desc}</h5>
            </div>
          </article>
        </div>
      </Paper>
    </div>
  );
};

export default HeaderHome;
