import React from "react";
interface Props {
  sliderContainer: any;
  subcontentContainer: any;
  sliderFirst?: any;
}

const CardsSlider: React.FC<Props> = ({
  sliderContainer,
  subcontentContainer,
  sliderFirst,
}) => {
  //show button
  const expandSlider = () => {
    sliderContainer.classList.toggle("expand");
    subcontentContainer.style.display = "none";
    let arrowButtons: any = document.getElementsByClassName("arrows");
    let i;

    let showButtonText = document.getElementsByClassName("show-button")[0];
    if (showButtonText.innerHTML === "show") {
      showButtonText.innerHTML = "hide";
      for (i = 0; i < arrowButtons.length; i++) {
        arrowButtons[i].style.display = "block";
      }
    } else {
      showButtonText.innerHTML = "show";
      subcontentContainer.style.display = "block";
      for (i = 0; i < arrowButtons.length; i++) {
        arrowButtons[i].style.display = "none";
      }
    }
  };

  return (
    <React.Fragment>
      <button className="slider-buttons show-button" onClick={expandSlider}>
        show
      </button>
    </React.Fragment>
  );
};

export default CardsSlider;
