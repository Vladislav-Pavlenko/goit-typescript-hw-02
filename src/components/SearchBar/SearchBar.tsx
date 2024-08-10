import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import css from "./SearcbBar.module.css";
type Props = { onSubmit: (newImage: string) => void };

export default function SearchBar({ onSubmit }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      const formInput = inputRef.current.value;
      if (formInput.trim() === "") {
        toast("Please enter a search query", { position: "top-right" });
        return;
      }
      onSubmit(formInput);
      event.currentTarget.reset();
    }
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.form_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
        />
        <button className={css.form_btn} type="submit">
          <IoSearchSharp />
        </button>
        <Toaster />
      </form>
    </header>
  );
}
