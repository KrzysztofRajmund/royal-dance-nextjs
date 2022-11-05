import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import offersData from "../../offerData.json";
import cx from "classnames";

interface ILongDesc {
  h2: string
  bold_1: string
  p_list: string
  list: string[]
  p_1: string
  bold_2: string
  p_2: string
  bold_3: string
}
interface IOffer {
  id: string
  image: string
  title: string
  subtitle: string
  desc?: string | undefined
  longDesc?: ILongDesc | undefined

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
        desc: data.desc || undefined,
        longDesc: data.longDesc || undefined
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
          <div className="cards-content-logo">
            <Image
              src="/static/assets/logo2.png"
              alt="logo"
              width={120}
              height={120}
            />
          </div>
          <h2 className="offers-title">{title || offer?.title}</h2>
        </div>
        <div className="cards-subcontent">
          <h1 className="cards-subcontent-title">{subtitle || offer?.subtitle}</h1>
          {desc || offer?.desc && <> <br /><p>{desc || offer?.desc}</p></>}
          {offer?.longDesc && <div className="longdesc">
            <h2 className="longdesc-h2">{offer.longDesc.h2}</h2>
            <strong className="longdesc-bold_1">{offer.longDesc.bold_1}</strong>
            <p className="longdesc-p_list">{offer.longDesc.p_list}</p>
            <ul className="longdesc-list">
              {offer.longDesc.list.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
            <p className="longdesc-p_1">{offer.longDesc.p_1}</p>
            <strong className="longdesc-bold_2">{offer.longDesc.bold_1}</strong>
            <p className="longdesc-p_2">{offer.longDesc.p_2}</p>
            <strong className="longdesc-bold_3">{offer.longDesc.bold_3}</strong>
          </div>}
        </div>
      </article>
    </section>
  );
};

export default Offers;
