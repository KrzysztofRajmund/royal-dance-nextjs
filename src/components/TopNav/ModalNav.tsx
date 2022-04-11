import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  closeNavModal: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ModalNav = ({ ...props }: Props) => {
  return (
    <div className="modalnav">
      <section className="modal-logo">
        <Link href="/">
          <a onClick={props.closeNavModal}>
            <Image
              src="/static/assets/logo.png"
              alt="logo"
              width={115}
              height={130}
            />
          </a>
        </Link>
      </section>
      <section className="modal-menu">
        <Link href="/onaszymstudio">
          <a onClick={props.closeNavModal}> O Nas</a>
        </Link>
        <div className="dropdown">
          <span className="dropdown-button">Oferta</span>
          <div className="dropdown-menu">
            <Link href="/taniec-rekreacyjny">
              <a onClick={props.closeNavModal}>Taniec rekreacyjny</a>
            </Link>
            <Link href="/taniec-sportowy">
              <a onClick={props.closeNavModal}>Taniec sportowy</a>
            </Link>
            <Link href="/wynajem-studia">
              <a onClick={props.closeNavModal}>Wynajem sali</a>
            </Link>
          </div>
        </div>
        <Link href="/cennik">
          <a onClick={props.closeNavModal}> Cennik</a>
        </Link>
        <Link href="/galeria">
          <a onClick={props.closeNavModal}>Galeria</a>
        </Link>
        <Link href="/kontakt">
          <a onClick={props.closeNavModal}> Kontakt</a>
        </Link>
      </section>
      <section className="modal-socialmedia">
        <a
          href="https://www.facebook.com/royaldanceszczecin"
          onClick={props.closeNavModal}
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <Image
            src="/static/assets/facebook.png"
            alt="facebook"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.instagram.com/royaldanceszczecin/"
          onClick={props.closeNavModal}
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <Image
            src="/static/assets/instagram.png"
            alt="instagram"
            width={30}
            height={30}
          />
        </a>
      </section>
    </div>
  );
};

export default ModalNav;
