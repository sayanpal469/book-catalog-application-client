import React, { useState } from "react";
import { IBook } from "../types/bookTypes";
import BookCard from "./BookCard";
import {
  useGetAllBooksQuery,
  useGetSearchBooksQuery,
  useGetBooksByGenreAndYearQuery,
} from "../redux/features/book/bookApi";

const Books = () => {
  const { data: allData, isLoading: isLoadingAllBooks } = useGetAllBooksQuery(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | "All">("All");
  const [selectedYear, setSelectedYear] = useState<string | "All">("All");

  const { data: searchData, isLoading: isLoadingSearchBooks } = useGetSearchBooksQuery(
    searchQuery
  );

  const {
    isLoading: isLoadingBooksByGenreAndYear,
    data: genreAndYearData,
  } = useGetBooksByGenreAndYearQuery({
    genre: selectedGenre === "All" ? undefined : selectedGenre,
    publicationYear: selectedYear === "All" ? undefined : selectedYear,
  });

  let combinedData: IBook[] | undefined = allData?.data;

  // Update combinedData based on search and filters
  if (searchData && searchQuery !== "") {
    combinedData = searchData.data;
  } else if (genreAndYearData) {
    combinedData = genreAndYearData.data;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenreValue = e.target.value;
    setSelectedGenre(selectedGenreValue);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYearValue = e.target.value;
    setSelectedYear(selectedYearValue);
  };

  const uniqueGenres: Array<string | "All"> = ["All", "Fiction", "Detective", "Mystery", "Horror", "Thriller"];

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
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <label className="block mb-2">Filter by Publication Year:</label>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="w-full px-4 py-2 border rounded shadow-sm mb-4"
        >
          <option value="All">All Years</option>
          {combinedData?.map((book: IBook) => (
            <option key={book.publicationYear} value={book.publicationYear}>
              {book.publicationYear}
            </option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-10">
        {isLoadingAllBooks || isLoadingBooksByGenreAndYear || isLoadingSearchBooks ? (
          <p className="text-5xl text-center">Loading....</p>
        ) : (
          combinedData?.map((book: IBook) => <BookCard key={book._id} book={book} />)
        )}
      </div>
    </div>
  );
};

export default Books;
