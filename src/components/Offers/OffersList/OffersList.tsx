import { useRouter } from 'next/router';
import React from 'react'
import { OfferCard } from './OfferCard/OfferCard';

import styles from './OffersList.module.scss';

type Offer = {
    id: number;
    url: string;
    category: string;
    title: string;
    subtitle: string;
    desc: string;
}

interface IOffersList {
    offerData: Offer[]
}

export const OffersList = ({ offerData }: IOffersList) => {
    const { pathname } = useRouter();

    return (
        <div className={styles.container}>
            {/* <h1>{pathname.includes("taniec-rekreacyjny") ? "Taniec Rekreacyjny" : "Taniec Sportowy"}</h1> */}
            <div className={styles.cards}>
                {offerData.slice(0, 3).filter(offer => pathname.includes(offer.category)).map((offer => <OfferCard key={offer.id} id={offer.id} category={offer.category} imageUrl={offer.url} subtitle={offer.subtitle} />))}
            </div>
        </div>
    )
};
