// el caso de uso es la implementacion del metodo o funcion para asegurarse que funciona tal como se espera.
// /el caso de uso no necesita dependencia de 3ros para funcioncionar, ej: utilizar controaldores propios como el httAdapter

import {HttpAdapter} from '../../../config/adapters/http/http.adapters';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movies/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcomingMovies = await fetcher.get<NowPlayingResponse>(
      '/movie/upcoming',
    );
    return upcomingMovies.results.map(result =>
      MovieMapper.fromMovieDbResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies - TopRatedUseCase');
  }
};
