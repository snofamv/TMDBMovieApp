// Archivo actual: StackRouter
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import MoviesScreen from '../screens/movies/MoviesScreen';
import TabNavigator from './TabNavigator';
export type RootStackParams = {
  Home: undefined;
  Movies: {
    idMovie: number;
  };
  Tabs: undefined;
  Menu: undefined;
};
const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movies" component={MoviesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
