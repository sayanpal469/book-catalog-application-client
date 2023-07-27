import { Link } from "react-router-dom";
import { IBook } from "../types/bookTypes";

interface Iprops {
  book: IBook;
}

const BookCard = ({ book }: Iprops) => {
  const imgUrl = `http://localhost:5000/uploads/${book?.image}`;
  // console.log(imgUrl)
  return (
    <div className="h-300 w-250 lg:h-350 lg:w-300">
      <Link to={`/book-details/${book._id}`} className="group relative block bg-black">
        <img
          alt="Developer"
          src={imgUrl}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            Title
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">
            {book.title}
          </p>

          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            Author
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">{book.author}</p>

          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            Genre
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">
            {book.genre}
          </p>
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
              {book.description && book.description.split(' ').slice(0, 25).join(' ')}...
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
