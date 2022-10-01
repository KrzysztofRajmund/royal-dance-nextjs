import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import offersData from '../../offerData.json';
import cx from 'classnames';
import { stringFormatting } from '../utilities/helpers/formatting';
import Meta from '../utilities/Meta';

interface IOffer {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  desc: string;
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

      data &&
        setOffer({
          id: data.id.toString(),
          image: data.url,
          title: data.title,
          subtitle: data.subtitle,
          desc: data.desc,
          category: data.category,
        });
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
  ///
  console.log('image', offer?.image);
  ///
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
      <section
        className={cx('cards-container offers', {
          'offer-subpage': offer?.image && offer?.subtitle,
        })}
      >
        <article id={id || offer?.id}>
          <div className='cards-content' style={sectionStyle}>
            <h1 className='cards-content-logo'>
              <Image
                src='/static/assets/logo2.png'
                alt='logo'
                width={120}
                height={120}
              />
            </h1>
            <h1 className='offers-title'>{title || offer?.title}</h1>
          </div>
          <div className='cards-subcontent'>
            <h1 className='cards-subcontent-title'>
              {subtitle || offer?.subtitle}
            </h1>
            <p>{desc || offer?.desc}</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Offers;
