// Archivo actual: CastActor
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Cast} from '../../../core/entities/cast.entity';
interface Props {
  actor: Cast;
}
const CastActor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: actor.avatar}} style={styles.image} />

      <View style={styles.actorInfo}>
        <Text style={styles.textActor}>{actor.name}</Text>
        <Text style={styles.textCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  textActor: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textCharacter: {
    fontSize: 12,
    opacity: 0.7,
  },
});

export default CastActor;
