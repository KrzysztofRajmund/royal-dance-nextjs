import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import offersData from '../../offerData.json';
import cx from 'classnames';
import { stringFormatting } from '../utilities/helpers/formatting';
import Meta from '../utilities/Meta';

export interface ILongDesc {
  h2: string
  bold_1: string
  p_list: string
  list: string[]
  p_1: string
  bold_2: string
  p_2: string
  bold_3: string
}
export interface IOffer {
  id: string
  image: string
  title: string
  subtitle: string
  desc: string
  longDesc?: ILongDesc | undefined

}

interface INewOffer extends IOffer {
  category: string;
}

const Offers: React.FC<IOffer> = ({ id, image, title, subtitle, desc }) => {
  const [offer, setOffer] = useState<INewOffer>();
  const router = useRouter();

  useEffect(() => {
    if (!id && !subtitle) {
      const data = offersData.offer.find(
        (offer) =>
          stringFormatting(offer.subtitle, ' ', '-') === router.query.oferta
      );

      data && setOffer({
        id: data.id.toString(),
        image: data.url,
        title: data.title,
        subtitle: data.subtitle,
        category: data.category,
        desc: data.desc,
        longDesc: data.longDesc || undefined
      })
    }
  }, [id, router, subtitle]);

  const sectionStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: image
      ? `url(/static/gallery/${image})`
      : `url(/static/offers/${offer?.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Meta
        webUrl={`https://www.royaldanceszczecin.pl/${offer?.category
          }/${offer && stringFormatting(offer?.subtitle, ' ', '-')}`}
        keywords={`${offer?.subtitle}, ${offer && stringFormatting(offer.category, '-', ' ')
          }, Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin`}
        type='text'
        title={`${offer?.subtitle} | Royal Dance Szkoła Tańca`}
        imageUrl={`https://www.royaldanceszczecin.pl/_ipx/w_1920,q_75/%2Fstatic%2Foffers%2F${offer?.image}?url=%2Fstatic%2Foffers%2F${offer?.image}&w=1920&q=75`}
        description={`${offer?.subtitle}, ${offer && stringFormatting(offer.category, '-', ' ')
          }, Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin`}
        imageAlt='Szkoła Tańca Szczecin'
      />
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
            {!!desc || !!offer?.desc && <> <br /><p>{desc || offer?.desc}</p></>}
            {offer?.longDesc && <div className="longdesc">
              <p className="longdesc-h2">{offer.longDesc.h2}</p>
              <strong className="longdesc-bold_1">{offer.longDesc.bold_1}</strong>
              <p className="longdesc-p_list">{offer.longDesc.p_list}</p>
              <ul className="longdesc-list">
                {offer.longDesc.list.map((el, index) => <li key={index}>{el}</li>)}
              </ul>
              <p className="longdesc-p_1">{offer.longDesc.p_1}</p>
              <strong className="longdesc-bold_2">{offer.longDesc.bold_2}</strong>
              <p className="longdesc-p_2">{offer.longDesc.p_2}</p>
              <strong className="longdesc-bold_3">{offer.longDesc.bold_3}</strong>
            </div>}
          </div>
        </article>
      </section>
    </>
  );
};

export default Offers;
