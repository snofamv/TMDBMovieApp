// Archivo actual: HomeScreen
import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import PosterCarousel from '../../components/movies/PosterCarousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../../hooks/useMovies';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying} = useMovies();

  if (isLoading) {
    return <Text>Cargando....</Text>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
