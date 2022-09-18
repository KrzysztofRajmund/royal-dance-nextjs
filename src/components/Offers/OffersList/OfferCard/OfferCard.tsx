import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Meta from '../../../utilities/Meta';

import styles from './OfferCard.module.scss';

interface IOffer {
    id: number;
    imageUrl: string;
    category: string;
    subtitle: string;
}

export const OfferCard = ({ id, imageUrl, category, subtitle }: IOffer) => {

    return (
        <>
            <Meta
                webUrl={`https://www.royaldanceszczecin.pl/${category}/${subtitle}`}
                keywords={`${subtitle}, ${category}, Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin`}
                type="text"
                title={`Royal Dance Szkoła Tańca-${subtitle}`}
                imageUrl="https://www.royaldanceszczecin.pl/_ipx/w_1080,q_75/%2Fstatic%2Fgallery%2Fimg11.jpg?url=%2Fstatic%2Fgallery%2Fimg11.jpg&w=1080&q=75"
                description={`${subtitle}, ${category}, Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin`}
                imageAlt="Szkoła Tańca Szczecin"
            />
            <Link href={`/${category}/${subtitle}`} passHref>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <Image
                            placeholder="blur"
                            blurDataURL={`/static/offers/${imageUrl}`}
                            src={`/static/offers/${imageUrl}`}
                            alt={`image-${subtitle}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1>{subtitle}</h1>
                </div>
            </Link>
        </>
    )
};
