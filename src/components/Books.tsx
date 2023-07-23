import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/bookTypes";
import BookCard from "./BookCard";

const Books = () => {
  const { isLoading, data } = useGetBooksQuery(undefined);
  

  console.log(data);

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-16 mt-20 px-5">
      <div className="w-full md:w-1/3 lg:w-2/4">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full px-4 py-2 border rounded shadow-sm mb-4"
          // value={searchQuery}
          // onChange={handleSearch}
        />

        <label className="block mb-2">Filter by Genre:</label>
        <select className="w-full px-4 py-2 border rounded shadow-sm mb-4">
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery">Mystery</option>
          {/* Add more genres as needed */}
        </select>

        <label className="block mb-2">Filter by Publication Year:</label>
        <select className="w-full px-4 py-2 border rounded shadow-sm mb-4">
          <option value="All">All</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          {/* Add more publication years as needed */}
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {isLoading && <p className="text-5xl text-center">Loading....</p>}
        {!isLoading && data.data.map((book: IBook) => <BookCard book={book} />)}
      </div>
    </div>
  );
};

export default Books;
