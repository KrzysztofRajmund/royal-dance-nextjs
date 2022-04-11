import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const handleUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="footer">
      <article className="footer-top">
        <Image
          src="/static/assets/logo2.png"
          alt="logo"
          width={160}
          height={160}
        />
      </article>
      <article className="footer-middle">
        <h5>Copyrights 2021. Created by RajmundTech</h5>
      </article>
      <article className="footer-bottom" onClick={handleUpClick}>
        <div className="footer-bottom-arrow"></div>
        <h4>up</h4>
      </article>
    </section>
  );
};

export default Footer;
