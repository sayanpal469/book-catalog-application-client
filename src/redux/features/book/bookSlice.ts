import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookFilters } from "../../../types/bookTypes";

const initialState: IBookFilters = {
  genre: "Fiction",
  publicationYear: "2023",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setYear: (state, action: PayloadAction<string>) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setGenre, setYear } = bookSlice.actions;

export default bookSlice.reducer;
