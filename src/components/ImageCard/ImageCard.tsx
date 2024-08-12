import { Image } from "../../unsplash-api";
import css from "./ImageCard.module.css";

type Props = {
  image: Image;
  openModal: (image: Image) => void;
};

export default function ImageCard({ image, openModal }: Props) {
  return (
    <div onClick={() => openModal(image)}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
