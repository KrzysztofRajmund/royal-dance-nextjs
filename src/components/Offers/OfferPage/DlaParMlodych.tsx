import React from 'react';
import Image from 'next/image';
import offersData from '../../../offerData.json';
import cx from 'classnames';
import Meta from '../../utilities/Meta';

const DlaParMlodych: React.FC = () => {

    const offer = offersData.offer.find((x => x.subtitle === "Taniec dla Par Młodych"))

    const sectionStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(/static/offers/${offer?.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    };

    return (
        <>
            <Meta
                webUrl={`https://www.royaldanceszczecin.pl/taniec-dla-par-mlodych`}
                keywords={`${offer?.subtitle}, Taniec Rekreacyjny, Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin`}
                type='text'
                title={`${offer?.subtitle} | Royal Dance Szkoła Tańca`}
                imageUrl={`https://www.royaldanceszczecin.pl/_ipx/w_1920,q_75/%2Fstatic%2Foffers%2F${offer?.url}?url=%2Fstatic%2Foffers%2F${offer?.url}&w=1920&q=75`}
                description={`${offer?.subtitle}, Taniec Rekreacyjny
                    }, Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin`}
                imageAlt='Szkoła Tańca Szczecin'
            />
            <section className={cx("cards-container offers", { 'offer-subpage': offer?.url && offer?.subtitle })}>
                <article>
                    <div className="cards-content" style={sectionStyle}>
                        <div className="cards-content-logo">
                            <Image
                                src="/static/assets/logo2.png"
                                alt="logo"
                                width={120}
                                height={120}
                            />
                        </div>
                        <h2 className="offers-title">{offer?.title}</h2>
                    </div>
                    <div className="cards-subcontent">
                        <h1 className="cards-subcontent-title">Taniec dla nowożeńców Szczecin</h1>
                        {!!offer?.desc && <> <br /><p>{offer?.desc}</p></>}
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

export default DlaParMlodych;
