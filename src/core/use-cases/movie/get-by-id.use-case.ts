// el caso de uso es la implementacion del metodo o funcion para asegurarse que funciona tal como se espera.
// /el caso de uso no necesita dependencia de 3ros para funcioncionar, ej: utilizar controaldores propios como el httAdapter

import {HttpAdapter} from '../../../config/adapters/http/http.adapters';
import {MovieDetailsResults} from '../../../infrastructure/interfaces/movies/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  idMovie: number,
): Promise<FullMovie> => {
  try {
    const movieDetails = await fetcher.get<MovieDetailsResults>(
      `/movie/${idMovie.toString()}`,
    );

    return MovieMapper.fromMovieDbResultToDetails(movieDetails);
  } catch (error) {
    throw new Error('Error fetching movie - getMovieByIdUseCase');
  }
};
