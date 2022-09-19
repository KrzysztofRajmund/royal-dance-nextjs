import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Meta from '../utilities/Meta';

const About = () => {
  const instructors = [
    {
      id: 1,
      name: 'Magdalena Geldner',
      desc: 'Założycielka Szkoły Tańca Royal Dance, Trener LA',
      url: 'magdalena-geldner.jpg',
    },
    {
      id: 2,
      name: 'Oskar Dziedzic',
      desc: 'Trener LA',
      url: 'oskar-dziedzic.jpg',
    },
    {
      id: 3,
      name: 'Michał Bartkiewicz',
      desc: 'Trener LA',
      url: 'michal-bartkiewicz.jpg',
    },
    {
      id: 4,
      name: 'Tomasz Konury',
      desc: 'Trener ST',
      url: 'tomasz-konury.jpg',
    },
    {
      id: 5,
      name: 'Sara Gromadzka',
      desc: 'Instruktorka',
      url: 'sara-gromadzka.jpg',
    },
    {
      id: 6,
      name: 'Igor Kaczmarek',
      desc: 'Instruktor',
      url: 'igor-kaczmarek.jpg',
    },
    {
      id: 7,
      name: 'Kamila & Andrej Mosejcuk',
      desc: 'Szkoleniowcy LA',
      url: 'kamila-andrej.jpg',
    },
    {
      id: 8,
      name: 'Aneta Pawlak',
      desc: 'Szkoleniowiec ST',
      url: null,
    },
    {
      id: 9,
      name: 'Olga Kuzmina-Pietkiewicz',
      desc: 'Przygotowanie baletowe',
      url: 'olga-kuzmina-pietkiewicz.jpg',
    },
  ];
  return (
    <>
      <Meta
        webUrl='https://www.royaldanceszczecin.pl/o-szkole-tanca'
        keywords='Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin'
        type='text'
        title='O naszej szkole tańca'
        description='Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin'
        imageUrl='https://www.royaldanceszczecin.pl/_ipx/w_1080,q_75/%2Fstatic%2Fgallery%2Fimg6.jpg?url=%2Fstatic%2Fgallery%2Fimg6.jpg&w=1080&q=75'
        imageAlt='Szkoła Tańca Szczecin'
      />
      <section className='instructors'>
        <div className='instructors-cards'>
          {instructors.map((instructor) => {
            return (
              <div className='instructor-card' key={instructor.id}>
                <div className='instructor-image'>
                  <Image
                    placeholder='blur'
                    blurDataURL={`/static/instructors/${instructor.url}`}
                    src={`/static/instructors/${instructor.url ?? 'logo.png'}`}
                    alt={`image-${instructor.id}`}
                    layout='fill'
                    objectFit={instructor.url ? 'cover' : 'contain'}
                  />
                </div>
                <div className='instructor-name'>{instructor.name}</div>
                <div className='instructor-description'>{instructor.desc}</div>
              </div>
            );
          })}

        </div>
      </section>
      <section className='cards-container about' style={{
        backgroundImage: `url(/static/assets/onas-recepcja.jpg)`,
        width: "100vw",
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        paddingRight: '0px',
        paddingLeft: '0px',
        paddingTop: '900px',
        paddingBottom: '900px',
      }} >
        <article >
          <div className='cards-content'>
            <h1>
              <Image
                src='/static/assets/logo2.png'
                alt='logo'
                width={120}
                height={120}
              />
            </h1>
            <h1>Szkoła Tańca</h1>
          </div>
          <div className='cards-subcontent'>
            <p className='cards-subcontent-title'>
              Szkoła Tańca Royal Dance to miejsce założone przez Magdalenę
              Geldner tancerkę międzynarodowej klasy tanecznej S, która na swoim
              tanecznym koncie ma liczne osiągnięcia na arenie polskiej oraz
              międzynarodowej. <br />
              Posiada wyższe wykształcenie pedagogiczne. Charakteryzuje się
              wieloletnim doświadczeniem w pracy z dziećmi i dorosłymi. Szkołę
              prowadzi z myślą o rozwijaniu nowych, tanecznych talentów.
            </p>
            <br />
            <p>
              {' '}
              <u>Stawiamy na jakoś, profesjonalizm i dobrą atmosferę.</u>
            </p>
            <h2>Prowadzimy zajęcia dla:</h2>
            <ul>
              <li>Grup Sportowych</li>
              <li>Grup Dziecięcych</li>
              <li>Pań</li>
              <li>Par Dorosłych</li>
              <li>Nowożeńców</li>
            </ul>
            <h2>Organizujemy wydarzenia takie jak:</h2>
            <ul>
              <li>Obozy sportowe</li>
              <li>Obozy rekreacyjne</li>
              <li>Półkolonie dla Dzieci</li>
              <li>Mikołajkowe i Wakacyjne Turnieje Tańca</li>
              <li>Warsztaty dla Pań</li>
              <li>Imprezy Okolicznościowe</li>
            </ul>
            <p>
              Doświadczona kadra, fantastyczna atmosfera, klimatyczna sala oraz
              pełen profesjonalizm - to wszystko czego możecie doświadczyć
              przekraczając nasze progi. Siedziba Szkoły Tańca mieści się przy
              ulicy Lelewela 8a, w Szczecinie. Przed szkołą jest darmowy parking
              oraz sklep Biedronka.
            </p>
            <p>
              Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą zabawę?
              W takim razie przyjdź na zajęcia próbne, a gwarantujemy, że
              zostaniesz z nami na dłużej!
            </p>
            {/* {userLocation === "/" ? <p><Link className="about-link" onClick={scrollUp} to="/onas" >czytaj więcej . . .</Link></p> : ""}
                    {userLocation === "/onas" ? <>
                        <p>Szkoleniowcami są : Andrej Mosejcuk i Kamila Kajak trzykrotni Mistrzowie par zawodowych, półfinaliści Mistrzostw Świata Europy oraz półfinaliści Blackpool.Marek Kosaty i Paulina Glazik trzykrotni Mistrzowie Swiata, dwukrotni zwycięzcy Blackpool Festival UK i International Open w Royal Albert Hall.Monika Marszałek tancerka baletu , która pochodzi z Krakowa gdzie uczyła się i pracowała w Operze Krakowskiej , obecnie związana z Operą na Zamku w Szczecinie.
                    Agata Korzemiacka trenerka przygotowania motorycznego oraz entuzjastka holistycznego podejścia do treningu. Autorka wielu programów dydaktycznych. </p>
                        <p>Szkoleniowcami są : Andrej Mosejcuk i Kamila Kajak trzykrotni Mistrzowie par zawodowych, półfinaliści Mistrzostw Świata Europy oraz półfinaliści Blackpool.</p></> : ""
                    } */}
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
