import {
  Genre,
  ProductionCompany,
} from '../../infrastructure/interfaces/movies/movie-db.response';

export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface FullMovie extends Movie {
  genres: string[] | Genre[];
  duration: number;
  budget: number;
  originalTitle: string;
  pructuctionCompanies: string[] | ProductionCompany[];
}
