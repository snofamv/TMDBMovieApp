// Archivo actual: FullScreenLoader
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const FullScreenLoader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={'indigo'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
export default FullScreenLoader;
