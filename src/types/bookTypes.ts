export interface IReview {
  reviewer: string;
  reviewText: string;
}

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  pdf: string | undefined;
  reviews: IReview;
  description: string;
}

export interface IBookFilters {
  searchTerm?: string;
  genre?: string;
  publicationYear?: string;
}
