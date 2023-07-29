// import { IBook } from "../../../types/bookTypes";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    getSearchBooks: builder.query({
      query: (searchText: string) => `/books?searchTerm=${searchText}`,
    }),
    getBooksByGenreAndYear: builder.query({
      query: ({ genre, publicationYear }) => {
        let query = "/books";

        if (genre && publicationYear) {
          query += `?genre=${genre}&publicationYear=${publicationYear}`;
        } else if (genre) {
          query += `?genre=${genre}`;
        } else if (publicationYear) {
          query += `?publicationYear=${publicationYear}`;
        }

        return query;
      },
    }),
    getSingelBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSearchBooksQuery,
  useGetBooksByGenreAndYearQuery,
  useGetSingelBookQuery,
  useUpdateBookMutation,
} = bookApi;
