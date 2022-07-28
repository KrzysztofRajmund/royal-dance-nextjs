import React, { useEffect } from "react";
//anime
import anime from "animejs";

interface Props {
  windowWidth: number;
}

const TopJumbotron = ({ windowWidth }: Props) => {
  useEffect(() => {
    animationLoad();
  }, []);

  const animationLoad = () => {
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
  };

  const subtitle =
    windowWidth && windowWidth <= 365
      ? "szkoła tańca"
      : "szczecińska szkoła tańca";

  return (
    <section className="topjumbotron-container">
      <div className="topjumbotron-img">
        <article>
          <div className="entrance">
            <h1>Royal Dance</h1>
            <h5 className="entrance-subtitle">{subtitle}</h5>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TopJumbotron;
