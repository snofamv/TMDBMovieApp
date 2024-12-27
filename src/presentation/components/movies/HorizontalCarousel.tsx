// Archivo actual: HorizontalCarousel
import {
  View,
  Text,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MoviePoster from './MoviePoster';
import {Movie} from '../../../core/entities/movie.entity';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}
const HorizontalCarousel = ({movies, title, loadNextPage}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current && loadNextPage) {
      return;
    }
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReach =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReach) {
      return;
    }
    isLoading.current = true;
    // cargar siguientes peliculas
    loadNextPage && loadNextPage();
  };
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {/* <MoviePoster movie={movie} /> */}
      {/* Flatlist carga de manera dinamica los elementos */}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => {
          const key = `${item.title}-${index}-${item.id}`;
          console.log(key);
          return key;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});

export default HorizontalCarousel;
