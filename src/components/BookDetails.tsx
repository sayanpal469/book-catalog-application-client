// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingelBookQuery,
} from "../redux/features/book/bookApi";
import EditModal from "./EditModal";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book } = useGetSingelBookQuery(id);
  const [deleteBook, { isLoading, isSuccess, data, error: responseError }] =
    useDeleteBookMutation();
  const imgUrl = `http://localhost:5000/uploads/${book?.data?.image}`;
  const navigate = useNavigate();

  console.log(data)

  const handleDelete = async () => {
    try {
      // Initiate the deleteBook mutation and await the response
      const response = await deleteBook(id);

      // Check if the response was successful (status code 200-299)
      if (isSuccess && response.data?.success === true) {
        // Book deleted successfully, handle any further actions here.
        console.log("Book deleted successfully!");
        alert("Book deleted");
        navigate("/books"); // Navigate to the "/books" route after successful deletion
      } else {
        // Handle any potential errors from the server
        console.error("Failed to delete the book:", responseError);
      }
    } catch (error) {
      // Handle any other errors, such as network issues
      console.error("An error occurred while deleting the book:", error);
    }
  };
  return (
    <section>
      <EditModal id={id} />
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img src={imgUrl} />
          </div>

          <div className="sticky top-0">
            <div className="mt-8">
              <h1 className="text-xl font-bold sm:text-2xl">
                {book?.data?.title}
              </h1>

              <div className="-ms-0.5 flex">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* Rating stars SVG code */}
                </svg>
              </div>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{book?.data?.description}</p>
              </div>
              {/* The "Read More" button to navigate to the book details page */}

              <p className="text-sm my-2">
                <span className="font-semibold">Author:</span>{" "}
                {book?.data?.author}
              </p>
              <p className="text-sm mb-2">
                <span className="font-semibold">Genre:</span>{" "}
                {book?.data?.genre}
              </p>
              <p className="text-sm mb-2">
                <span className="font-semibold">Publication year:</span>{" "}
                {book?.data?.publicationDate}
              </p>

              {/* Reviews section goes here */}
              {/* Add your code to display reviews here */}

              <div className="mt-4">
                <button
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onClick={() => (globalThis as any).my_modal_5.showModal()}
                  className="btn btn-primary mr-2"
                >
                  Edit
                </button>
                <button
                  disabled={isLoading}
                  onClick={handleDelete}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
