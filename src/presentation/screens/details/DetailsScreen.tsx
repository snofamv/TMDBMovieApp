// Archivo actual: DetailsScreen
import {ScrollView} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {useMovie} from '../../hooks/useMovie';
import MovieHeader from '../../components/movie/MovieHeader';
import MovieDetails from '../../components/movie/MovieDetails';
import FullScreenLoader from '../../components/loaders/FullScreenLoader';
interface Props extends StackScreenProps<RootStackParams, 'Details'> {}
const DetailsScreen = ({route}: Props) => {
  const {idMovie} = route.params;
  const {isLoading, movie, cast} = useMovie(idMovie);

  if (isLoading) {
    return <FullScreenLoader />;
  }
  // console.log('ACTORES: ', cast);
  // console.log('FULL MOVIE: ', movie);
  return (
    <ScrollView>
      {/* movie header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />

      {/* movie detail */}
      <MovieDetails movie={movie} cast={cast} />

      {/* Castings */}
    </ScrollView>
  );
};

export default DetailsScreen;
