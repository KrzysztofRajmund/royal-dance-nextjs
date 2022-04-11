import React from "react";
import Image from "next/image";

interface Props {
  id: string;
  image?: string;
  title: string;
  subtitle: string;
  desc: string;
}

const OffersTwo: React.FC<Props> = ({ id, image, title, subtitle, desc }) => {
  let sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/static/gallery/${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="cards-container offers">
      <article id={id}>
        <div className="cards-subcontent">
          <p className="cards-subcontent-title">{subtitle}</p>
          <br />
          <p>{desc}</p>
        </div>
        <div className="cards-content" style={sectionStyle}>
          <h1>
            <Image
              src="/static/assets/logo2.png"
              alt="logo"
              width={120}
              height={120}
            />
          </h1>
          <h1 className="offers-title">{title}</h1>
        </div>
      </article>
    </section>
  );
};

export default OffersTwo;
