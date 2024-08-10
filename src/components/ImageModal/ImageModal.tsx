import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Image = {
  urls: {
    regular: string;
  };
  alt_description: string;
  description: string;
  user: { name: string };
  created_at: number;
  likes: number;
};

type Props = {
  image: Image | null;
  isOpen: boolean;
  onRequestClose: () => void;
};

export default function ImageModal({ image, isOpen, onRequestClose }: Props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      border: "none",
      padding: 0,
      backgroundColor: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
      className={css.modal_container}
    >
      {image && (
        <>
          <img
            className={css.modal_img}
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <ul className={css.modal_list}>
            <li className={css.modal_item}>{image.description}</li>
            <li className={css.modal_item}>Creator: {image.user.name}</li>
            <li className={css.modal_item}>Created at: {image.created_at}</li>
            <li className={css.modal_item}>Likes: {image.likes}</li>
          </ul>
        </>
      )}
    </Modal>
  );
}
