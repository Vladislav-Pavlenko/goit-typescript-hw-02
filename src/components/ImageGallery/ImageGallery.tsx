import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type Props = {
  imageArr: { [key: string]: any };
  openModal: (image: object) => void;
};

export default function ImageGallery({ imageArr, openModal }: Props) {
  return (
    <ul className={css.list}>
      {imageArr.map(
        (image: {
          id: string;
          urls: { small: string };
          alt_description: string;
        }) => (
          <li key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        )
      )}
    </ul>
  );
}
