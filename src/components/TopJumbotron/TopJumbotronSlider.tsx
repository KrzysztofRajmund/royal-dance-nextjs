import { useEffect } from 'react';

import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//anime
import anime from "animejs";

interface Props {
  windowWidth: number;
}

const TopJumbotronSlider = ({ windowWidth }: Props) => {

  const animationLoad = (delay: number, className: string) => {
    var sliderSubtitle: any = document.querySelector(className);
    const regex = /\S/g;
    sliderSubtitle.innerHTML = sliderSubtitle.textContent.replace(
      regex,
      "<span class='words'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: `${className} .words`,
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 6000,
      delay: (el, i) => 3000 + delay * i,
    });
  };

  useEffect(() => {
    animationLoad(30, ".slider-subtitle");
    animationLoad(90, ".slider-info");
  }, []);

  const settings: Settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const images = ['/static/assets/rd-gif.gif', '/static/assets/img8.jpg', '/static/gallery/img1.jpg', '/static/gallery/img2.jpg', '/static/gallery/img30.jpg']
  const subtitle =
    windowWidth && windowWidth <= 395
      ? "szkoła tańca"
      : "szczecińska szkoła tańca";
  const info = "Dołącz do Nas";

  return (
    <div className="sliders-container">
      <Slider {...settings}>
        {images.map((image) => {
          return <div className="slider" key={image}>
            <Image
              priority
              blurDataURL={image}
              src={image}
              alt={image}
              layout="fill"
              objectFit="cover"
            />
            <article className="slider-content">
              <div>
                <h1>Royal Dance</h1>
                <h5 className="slider-subtitle">{subtitle}</h5>
                <h5 className="slider-info">{info}</h5>
              </div>
            </article>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default TopJumbotronSlider;

