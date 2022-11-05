import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { stringFormatting } from '../../../utilities/helpers/formatting';
import Meta from '../../../utilities/Meta';
import styles from './OfferCard.module.scss';

interface IOffer {
    id: number;
    imageUrl: string;
    category: string;
    subtitle: string;
}

export const OfferCard = ({ imageUrl, category, subtitle, id }: IOffer) => {

    return (
        <>
            <Link href={`/${category}/${stringFormatting(subtitle, " ", "-")}`} passHref>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <Image
                            placeholder='blur'
                            blurDataURL={`/static/offers/${imageUrl}`}
                            src={`/static/offers/${imageUrl}`}
                            alt={`image-${stringFormatting(subtitle, " ", "-")}`}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <h1>{subtitle.replace("Szczecin", "")}</h1>
                </div>
            </Link>
        </>
    );
};
