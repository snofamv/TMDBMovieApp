// Archivo actual: HomeScreen
import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import PosterCarousel from '../../components/movies/PosterCarousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../../hooks/useMovies';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcomming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <Text>Cargando....</Text>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
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

export default HomeScreen;
