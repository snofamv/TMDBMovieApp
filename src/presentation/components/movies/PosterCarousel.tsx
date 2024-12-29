// Archivo actual: PosterCarousel
import {View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Movie} from '../../../core/entities/movie.entity';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}
const PosterCarousel = ({movies, height = 440}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie: Movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

export default PosterCarousel;
