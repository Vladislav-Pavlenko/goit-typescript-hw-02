import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./unsplash-api";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

export default function App() {
  const [images, setImages] = useState<any>([]);
  const [query, setQuery] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  function onSubmit(newImage: string): void {
    setImages([]);
    setQuery(newImage);
    setPage(1);
  }

  function handleClick(): void {
    setPage(page + 1);
  }

  function openModal(image: object): void {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
    setSelectedImage(null);
  }

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getImages() {
      try {
        setLoader(true);
        setError(false);
        const promise = await fetchImages(query, page);
        setImages((prevArray: any) => [...prevArray, ...promise.results]);
        setTotalPages(promise.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {images.length !== 0 && (
        <ImageGallery imageArr={images} openModal={openModal} />
      )}
      {modalIsOpen && (
        <ImageModal
          image={selectedImage}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
      {loader && <Loader />}
      {images.length !== 0 && page < totalPages && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      {page >= totalPages && <p>THIS IS THE END! RUN FOOLS!</p>}
    </>
  );
}
