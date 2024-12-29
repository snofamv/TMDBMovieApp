import {Cast} from '../../core/entities/cast.entity';
import {MovieDBCast} from '../interfaces/movies/movie-db.response';

export class CastMapper {
  static fromMovieDbResultToEntity(cast: MovieDBCast): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? 'No character',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : `https://i.stack.imgur.com/l60HF.png`,
    };
  }
}
