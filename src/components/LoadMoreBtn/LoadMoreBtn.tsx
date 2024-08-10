import css from "./LoadMoreBtn.module.css";

type Props = { handleClick: () => void };

export default function LoadMoreBtn({ handleClick }: Props) {
  return (
    <button className={css.btn} onClick={handleClick}>
      Load more
    </button>
  );
}
