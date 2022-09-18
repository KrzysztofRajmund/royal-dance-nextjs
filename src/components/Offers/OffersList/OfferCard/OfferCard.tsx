import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './OfferCard.module.scss';

interface IOffer {
    id: number;
    imageUrl: string;
    category: string;
    subtitle: string;
}

export const OfferCard = ({ id, imageUrl, category, subtitle }: IOffer) => {

    return (
        <div className={styles.card}>
            <Link href={`/${category}/${subtitle}`} passHref>
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
            </Link>
        </div>
    )
};
