// import { IBook } from "../../../types/bookTypes";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSearchBooks: builder.query({
      query: (searchText: string) => `/books?searchTerm=${searchText}`,
      providesTags: ["books"]
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
      providesTags: ["books"]
    }),
    getSingelBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"]
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  usePostBookMutation,
  useGetAllBooksQuery,
  useGetSearchBooksQuery,
  useGetBooksByGenreAndYearQuery,
  useGetSingelBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
