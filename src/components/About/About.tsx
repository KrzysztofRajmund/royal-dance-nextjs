import Image from "next/image";
import Meta from "../utilities/Meta";

const About = () => {
  return (
    <>
      <Meta
        webUrl="https://www.royaldanceszczecin.pl/onaszymstudio"
        keywords="Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin"
        type="text"
        title="O naszym studio"
        description="Szkoła Tańca Szczecin, Latino Solo Szczecin, Zajęcia dla Pań Szczecin, Taniec Szczecin, Lekcje dla nowożeńców Szczecin, Pierwszy Taniec Szczecin"
        imageUrl="https://www.royaldanceszczecin.pl/_ipx/w_1080,q_75/%2Fstatic%2Fgallery%2Fimg6.jpg?url=%2Fstatic%2Fgallery%2Fimg6.jpg&w=1080&q=75"
        imageAlt="Szkoła Tańca Szczecin"
      />
      <section className="cards-container about">
        <article>
          <div className="cards-content">
            <h1>
              <Image
                src="/static/assets/logo2.png"
                alt="logo"
                width={120}
                height={120}
              />
            </h1>
            <h1>Studio Tańca</h1>
          </div>
          <div className="cards-subcontent">
            <p className="cards-subcontent-title">
              Szkoła Tańca Royal Dance to miejsce, w którym taniec jest
              najważniejszy.
            </p>
            <br />
            <p>
              {" "}
              <u>Stawiamy na jakoś i profesjonalizm.</u>
            </p>
            <p>
              Doświadczona kadra, fantastyczna atmosfera, klimatyczna sala oraz
              pełen profesjonalizm - to wszystko czego możecie doświadczyć
              przekraczając nasze progi.
            </p>
            <p>
              Masz trochę wolnego czasu i chcesz wykorzystać go na dobrą zabawę?
            </p>
            <p>Dołącz do nas !</p>
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
