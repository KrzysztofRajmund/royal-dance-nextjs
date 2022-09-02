import Image from 'next/image';
import React from 'react';
import planRekreacja from '../../../public/static/assets/plan-rekreacja.png';
import planSport from '../../../public/static/assets/plan-sport.png';
import cennikRekreacja from '../../../public/static/assets/cennik-rekreacja.png';
import cennikSport from '../../../public/static/assets/cennik-sport.png';

const Info: React.FC = () => {
    return (
        <>
            <section className="container">
                <h1>Plan zajęć</h1>
                <div className="card">
                    <h2>Taniec rekreacyjny</h2>
                    <Image src={planRekreacja} alt='plan-rekreacja' />
                </div>
                <div className="card">
                    <h2>Taniec sportowy</h2>
                    <Image src={planSport} alt='plan-sport' />
                </div>
            </section>
            <section className="container">
                <h1>Cennik zajęć</h1>
                <div className="card">
                    <h2>Taniec rekreacyjny</h2>
                    <Image src={cennikRekreacja} alt='cennik-rekreacja' />
                </div>
                <div className="card">
                    <h2>Taniec sportowy</h2>
                    <Image src={cennikSport} alt='cennik-sport' />
                </div>
            </section>
        </>
    );
};

export default Info;
