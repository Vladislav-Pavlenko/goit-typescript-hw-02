import { Image } from "../../unsplash-api";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type Props = {
  imageArr: Image[];
  openModal: (image: Image) => void;
};

export default function ImageGallery({ imageArr, openModal }: Props) {
  return (
    <ul className={css.list}>
      {imageArr.map((image: Image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
