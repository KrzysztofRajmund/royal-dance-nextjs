import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalNav from "./ModalNav";

const TopNav = () => {
  const [modal, setModal] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleDropdownClick = useCallback(
    (e: MouseEvent) => {
      const ref = dropdownMenuRef.current;
      if (isDropdownActive && ref && !ref.contains(e.target as Node)) {
        setIsDropdownActive(false);
      }
      return;
    },
    [isDropdownActive]
  );

  useEffect(() => {
    if (isDropdownActive) {
      document.addEventListener("click", handleDropdownClick);
    }
    return () => {
      document.removeEventListener("click", handleDropdownClick);
    };
  }, []);

  return (
    <nav className="topnav-container">
      <section onClick={openModal} className="navicon">
        <div
          className={modal ? "navicon-btn active" : "navicon-btn not-active"}
        >
          <span className=" navicon-span navicon-span-first"></span>
          <span className="navicon-span navicon-span-second"></span>
          <span className="navicon-span navicon-span-third"></span>
        </div>
      </section>
      {modal ? (
        <ModalNav closeNavModal={closeModal} />
      ) : (
        <React.Fragment>
          <section className="topnav-logo">
            <Link href="/" passHref>
              <Image
                src="/static/assets/logo.png"
                alt="logo"
                width={75}
                height={75}
              />
            </Link>
          </section>
          <section className="topnav-menu">
            <Link href="/onaszymstudio">O Nas</Link>
            <div className="dropdown">
              <span
                className="dropdown-button"
                onClick={() => setIsDropdownActive(true)}
              >
                Oferta
              </span>
              <div
                ref={dropdownMenuRef}
                onMouseLeave={() => setIsDropdownActive(false)}
                className={`dropdown-menu ${
                  isDropdownActive ? "active" : "not-active"
                }`}
              >
                <Link href="/taniec-rekreacyjny">
                  <a onClick={() => setIsDropdownActive(false)}>
                    Taniec rekreacyjny
                  </a>
                </Link>
                <Link href="/taniec-sportowy">
                  <a onClick={() => setIsDropdownActive(false)}>
                    Taniec sportowy
                  </a>
                </Link>
                <Link href="/wynajem-studia">
                  <a onClick={() => setIsDropdownActive(false)}>Wynajem sali</a>
                </Link>
              </div>
            </div>
            <Link href="/cennik">Cennik</Link>
            <Link href="/galeria">Galeria</Link>
            <Link href="/kontakt">Kontakt</Link>
          </section>
          <section className="topnav-socialmedia">
            <a
              href="https://www.facebook.com/royaldanceszczecin"
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
        </React.Fragment>
      )}
    </nav>
  );
};

export default TopNav;
