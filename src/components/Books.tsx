import React, { useState } from "react";
import { IBook } from "../types/bookTypes";
import BookCard from "./BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";

const Books = () => {
  const { isLoading, data: allData } = useGetAllBooksQuery(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  console.log(allData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };


  return (
    <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-16 mt-20 px-5">
      <div className="w-full md:w-1/3 lg:w-2/4">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full px-4 py-2 border rounded shadow-sm mb-4"
          value={searchQuery}
          onChange={handleSearch}
        />

        <label className="block mb-2">Filter by Genre:</label>
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="w-full px-4 py-2 border rounded shadow-sm mb-4"
        >
          {allData?.data?.map((book: IBook) => (
            <option value={book.genre}>{book.genre}</option>
          ))}
        </select>

        <label className="block mb-2">Filter by Publication Year:</label>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="w-full px-4 py-2 border rounded shadow-sm mb-4"
        >
          {allData?.data?.map((book: IBook) => (
            <option value={book.publicationYear}>{book.publicationYear}</option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-10">
        {isLoading && <p className="text-5xl text-center">Loading....</p>}
        {!isLoading && allData?.data?.map((book: IBook) => <BookCard book={book} />)}
      </div>
    </div>
  );
};

export default Books;
