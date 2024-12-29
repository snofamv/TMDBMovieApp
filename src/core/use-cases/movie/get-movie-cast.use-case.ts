// el caso de uso es la implementacion del metodo o funcion para asegurarse que funciona tal como se espera.
// /el caso de uso no necesita dependencia de 3ros para funcioncionar, ej: utilizar controaldores propios como el httAdapter

import {HttpAdapter} from '../../../config/adapters/http/http.adapters';
import {MovieDbCastResponse} from '../../../infrastructure/interfaces/movies/movie-db.response';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper';
import {Cast} from '../../entities/cast.entity';
export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  idMovie: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDbCastResponse>(
      `/movie/${idMovie.toString()}/credits`,
    );

    return cast.map(item => CastMapper.fromMovieDbResultToEntity(item));
  } catch (error) {
    throw new Error('Error fetching movie casts');
  }
};
