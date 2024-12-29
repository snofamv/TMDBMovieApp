import {useEffect, useState} from 'react';
import {movieDbFetcher} from '../../config/adapters/http/moviedb.adapter';
import {FullMovie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (idMovie: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<FullMovie>({} as FullMovie);
  const [cast, setCast] = useState<Cast[]>([]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = await UseCases.getMovieByIdUseCase(
      movieDbFetcher,
      idMovie,
    );
    const castPromise = await UseCases.getMovieCastUseCase(
      movieDbFetcher,
      idMovie,
    );

    const [fullMovie, castMovie] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);
    setMovie(fullMovie);
    setCast(castMovie);
    setIsLoading(false);
  };

  useEffect(() => {
    loadMovie();
  }, [idMovie]);
  return {isLoading, movie, cast};
};
