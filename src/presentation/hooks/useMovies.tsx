// Archivo actual: useMovies
import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDbFetcher} from '../../config/adapters/http/moviedb.adapter';
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcomming, setUpcomming] = useState<Movie[]>([]);
  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      movieDbFetcher,
    );
    const popularPromise = await UseCases.moviesPopularUseCase(movieDbFetcher);
    const topRatedPromise = await UseCases.moviesTopRatedUseCase(
      movieDbFetcher,
    );
    const upcomingPromise = await UseCases.moviesUpcomingUseCase(
      movieDbFetcher,
    );

    const [nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);
    setUpcomming(upcomingMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    topRated,
    popular,
    upcomming,
  };
};
