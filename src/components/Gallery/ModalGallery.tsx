import Image from "next/image";
interface Props {
  id: number;
  category?: string;
  url: string;
}

const ModalGallery = ({ id, url }: Props) => {
  console.log("ID:", id);
  return (
    <section className="modal-container">
      <div className="modal-image">
        <Image
          src={url}
          alt={`modal-${id}`}
          layout='fill'
          objectFit="contain"
        />
      </div>
      <img
        className="prev-icon"
        src="/static/assets/prev-icon-white.png"
        alt="prev-icon"
      />
      <img
        className="next-icon"
        src="/static/assets/next-icon-white.png"
        alt="next-icon"
      />
      <img className="x-icon" src="/static/assets/x-icon.png" alt="x-icon" />
    </section>
  );
};

export default ModalGallery;
