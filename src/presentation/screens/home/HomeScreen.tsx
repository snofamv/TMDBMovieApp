// Archivo actual: HomeScreen
import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import PosterCarousel from '../../components/movies/PosterCarousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../../hooks/useMovies';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import FullScreenLoader from '../../components/loaders/FullScreenLoader';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcomming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      <View style={{...styles.container, marginTop: top + 20}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        {/* TopTated */}
        <HorizontalCarousel movies={topRated} title="Mejor calificado" />
        {/* Populares */}
        <HorizontalCarousel movies={upcomming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
});
export default HomeScreen;
