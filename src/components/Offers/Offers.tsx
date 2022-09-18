import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import offersData from "../../offerData.json";
import cx from "classnames";

interface IOffer {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  desc: string;
}

const Offers: React.FC<IOffer> = ({ id, image, title, subtitle, desc }) => {
  const [offer, setOffer] = useState<IOffer>()
  const router = useRouter();

  useEffect(() => {
    if (!id && !subtitle) {
      const data = offersData.offer.find((offer => offer.subtitle === router.query.oferta))

      data && setOffer({
        id: data.id.toString(),
        image: data.url,
        title: data.title,
        subtitle: data.subtitle,
        desc: data.desc
      })
    }
  }, [id, router, subtitle]);

  const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: image ? `url(/static/gallery/${image})` : `url(/static/offers/${offer?.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <section className={cx("cards-container offers", { 'offer-subpage': offer?.image && offer?.subtitle })}>
      <article id={id || offer?.id}>
        <div className="cards-content" style={sectionStyle}>
          <h1>
            <Image
              src="/static/assets/logo2.png"
              alt="logo"
              width={120}
              height={120}
            />
          </h1>
          <h1 className="offers-title">{title || offer?.title}</h1>
        </div>
        <div className="cards-subcontent">
          <p className="cards-subcontent-title">{subtitle || offer?.subtitle}</p>
          <br />
          <p>{desc || offer?.desc}</p>
        </div>
      </article>
    </section>
  );
};

export default Offers;
