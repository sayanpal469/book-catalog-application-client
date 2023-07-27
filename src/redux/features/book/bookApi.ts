// import { IBook } from "../../../types/bookTypes";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    getSearchBooks: builder.query({
      query: (searchText: string) => `/books?searchTerm=${searchText}`
    }),
    getFilterBooks: builder.query({
      query: (queryString) => `/books?${queryString}`
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
  useGetSingelBookQuery,
  useUpdateBookMutation,
} = bookApi;
