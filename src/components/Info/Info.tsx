import Image from 'next/image';
import React from 'react';

const Info: React.FC = () => {
    return (
        <>
            <section className="container">
                <h1>Plan zajęć</h1>
                <div className="card">
                    <h2>Taniec rekreacyjny</h2>
                    <Image src='/static/assets/plan-rekreacja.png' alt='plan-rekreacja' width={1000} height={661} />
                </div>
                <div className="card">
                    <h2>Taniec sportowy</h2>
                    <Image src='/static/assets/plan-sport.png' alt='plan-sport' width={1000} height={541} />
                </div>
            </section>
            <section className="container">
                <h1>Cennik zajęć</h1>
                <div className="card">
                    <h2>Taniec rekreacyjny</h2>
                    <Image src='/static/assets/cennik-rekreacja.png' alt='cennik-rekreacja' width={1000} height={820} />
                </div>
            </section>
        </>
    );
};

export default Info;
