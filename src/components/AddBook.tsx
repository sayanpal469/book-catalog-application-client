import { useState, FormEvent } from "react";
import { usePostBookMutation } from "../redux/features/book/bookApi";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [img, setImg] = useState<File | null>(null);

  const [postBook, { error: responseError }] =
    usePostBookMutation();

  const handelFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setImg(selectedFile);
    }
  };

  console.log(responseError)

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("publicationYear", publicationYear); // Use the updated state variable
    formData.append("description", description);
    if (img) {
      formData.append("image", img);
    }

    postBook(formData);

  };

  return (
    <div className="flex justify-center items-center">
      <form
        method="POST"
        className="modal-box lg:w-[25rem] flex justify-center items-center flex-col"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl my-5 font-bold">Add New Book</p>

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
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

        <div className="form-group flex flex-col lg:w-[20rem]">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
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
          <button type="submit" className="btn btn-warning mt-5 w-full">
            Add
          </button>
        </div>
      </form>

      
    </div>
  );
};

export default AddBook;
