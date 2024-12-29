// Archivo actual: MovieDetails
import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import {Cast} from '../../../core/entities/cast.entity';
import CastActor from '../cast/CastActor';
interface Props {
  movie: FullMovie;
  cast: Cast[];
}
const MovieDetails = ({movie, cast}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <View style={{...styles.container, width: width - 30}}>
      <View style={styles.row}>
        <Text>{movie.rating}</Text>
        <Text style={styles.textGenre}>- {movie.genres.join(', ')}</Text>
      </View>
      <Text style={styles.textHistory}>Historia</Text>
      <Text style={styles.textDescription}>{movie.description}</Text>
      <Text style={styles.textBudget}>Presupuesto</Text>
      <Text style={styles.textAmountBudget}>
        {Formatter.currency(movie.budget)}
      </Text>
      <View style={styles.containerCast}>
        <Text style={styles.textCast}>Actores</Text>
        <Text>Actores aca</Text>
        <FlatList
          data={cast}
          renderItem={({item}) => <CastActor actor={item} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  containerCast: {marginTop: 10, marginBottom: 50},
  row: {
    flexDirection: 'row',
  },
  textGenre: {
    marginLeft: 5,
  },
  textHistory: {fontSize: 32, fontWeight: 'bold', marginTop: 10},
  textDescription: {fontSize: 16},
  textBudget: {fontSize: 23, marginTop: 10, fontWeight: 'bold'},
  textCast: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  textAmountBudget: {fontSize: 18},
});

export default MovieDetails;
