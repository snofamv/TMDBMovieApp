import {FullMovie, Movie} from '../../core/entities/movie.entity';
import {
  type MovieDetailsResults,
  type Result,
} from '../interfaces/movies/movie-db.response';

export class MovieMapper {
  // EL mapper retorna los datos de la forma que tu quieras segun como quieras estructurar los datos
  static fromMovieDbResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
  static fromMovieDbResultToDetails(result: MovieDetailsResults): FullMovie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      budget: result.budget,
      duration: result.runtime,
      genres: result.genres.map(genre => genre.name),
      originalTitle: result.original_title,
      pructuctionCompanies: result.production_companies.map(
        compamy => compamy.name,
      ),
    };
  }
}
