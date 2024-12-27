// Archivo actual: PosterCarousel
import {View, StyleSheet} from 'react-native';
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PosterCarousel;
