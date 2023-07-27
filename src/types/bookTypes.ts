export interface IReview {
  reviewer: string;
  reviewText: string;
}

export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  image: string | undefined;
  reviews: IReview;
  description: string;
}

export interface IBookFilters {
  genre?: string;
  publicationYear?: string;
}

