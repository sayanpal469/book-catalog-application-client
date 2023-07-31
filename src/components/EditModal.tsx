/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent } from "react";
import { useUpdateBookMutation } from "../redux/features/book/bookApi";

interface IProps {
  id: string | undefined;
}

const EditModal = ({ id }: IProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [updateBook] =
    useUpdateBookMutation();

  const handelFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectFile = event.target.files[0];
      setImg(selectFile);
    }
  };

  // console.log(isLoading, isSuccess, isError);

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("publicationYear", publicationDate);
    if (img) {
      formData.append("image", img);
    }

    const options = {
      id: id,
      data: formData,
    };

    updateBook(options);
  };

  return (
    <div>
      {/* Add your modal UI and trigger button here */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box lg:w-[25rem] flex justify-center items-center flex-col"
          onSubmit={handleSubmit}
        >
          <button
            onClick={() => (globalThis as any).my_modal_5.close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <div className="form-group flex flex-col lg:w-[20rem]">
            <label className="label">
              <span className="label-text text-lg">Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-group flex flex-col lg:w-[20rem]">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-group flex flex-col lg:w-[20rem]">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-group flex flex-col lg:w-[20rem]">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="text"
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <fieldset className="w-full space-y-1 dark:text-gray-100 mt-5">
            <label className="block text-sm font-medium">Book Image</label>
            <div className="flex">
              <input
                type="file"
                name="files"
                id="files"
                onChange={handelFileChange}
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              />
            </div>
          </fieldset>
          {/* Modal footer with submit button */}
          <div className="modal-footer">
            {/* <label htmlFor="my_modal_5" className="btn">Close!</label> */}
            <button
              onClick={() => (globalThis as any).my_modal_5.close()}
              type="submit"
              className="btn btn-warning mt-5 w-full"
            >
              Save
            </button>
            {/* Add a button to close the modal here */}
          </div>
        </form>
      </dialog>

      {/* The actual modal content */}
    </div>
  );
};

export default EditModal;
