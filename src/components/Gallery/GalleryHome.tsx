import React, { useEffect, useState } from "react";
import imagesData from "../../imagesDataHome.json";
import Image from "next/image";
import ModalGallery from "./ModalGallery";
import Loading from "../utilities/Loading";

type ImageObject = {
  id: number;
  category?: string;
  url: string;
};

const GalleryHome = () => {
  const plusSign = 1;
  const minusSign = -1;
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //change image function
  const anotherImage = (sign: number) => {
    let filterImage: any = imagesData.images.filter(
      (x) => x.id === modalImage.id + sign
    );
    let newImageIndex: number = imagesData.images.indexOf(filterImage[0]);
    setModalImage(imagesData.images[newImageIndex]);
  };

  //open modal
  const openModalHandler = (image: ImageObject) => {
    setModal(true);
    setModalImage(image);
  };

  //close modal + conditional image change with click
  const modalHandler = (e: any) => {
    if (
      e.target.className === "modal-container" ||
      e.target.className === "x-icon"
    ) {
      setModal(false);
    }
    if (
      e.target.className === "next-icon" &&
      imagesData.images.indexOf(modalImage) < imagesData.images.length - 1
    ) {
      anotherImage(plusSign);
    }
    if (
      e.target.className === "prev-icon" &&
      imagesData.images.indexOf(modalImage) >= 1
    ) {
      anotherImage(minusSign);
    }
  };

  //image change conditional with keydown arrows
  if (modal) {
    window.onkeydown = (e: any) => {
      switch (e.keyCode) {
        case 39:
          if (
            imagesData.images.indexOf(modalImage) < imagesData.images.length
          ) {
            anotherImage(plusSign);
          }
          break;

        case 37:
          if (imagesData.images.indexOf(modalImage) >= 1) {
            anotherImage(minusSign);
          }
          break;
      }
    };
  }

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <section className="gallery">
          <h1>Nasze studio</h1>
          <div className="gallery-images">
            {imagesData.images
              .filter((x) => x.category === "home")
              .map((image) => {
                return (
                  <div
                    key={image.id}
                    className="gallery-image"
                    onClick={() => openModalHandler(image)}
                  >
                    <Image
                      placeholder="blur"
                      blurDataURL={`/static/gallery/${image.url}`}
                      src={`/static/gallery/${image.url}`}
                      alt={`image-${image.id}`}
                      width={1000}
                      height={666}
                    />
                  </div>
                );
              })}
          </div>
          <div onClick={(e) => modalHandler(e)}>
            {modal && (
              <ModalGallery
                id={modalImage.id}
                url={`/static/gallery/${modalImage.url}`}
              />
            )}
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default GalleryHome;
