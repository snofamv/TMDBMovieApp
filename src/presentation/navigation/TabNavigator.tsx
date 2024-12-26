// Archivo actual: TabNavigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {RootStackParams} from './StackNavigator';
import HomeScreen from '../screens/home/HomeScreen';
import MoviesScreen from '../screens/movies/MoviesScreen';
import MenuScreen from '../screens/menu/MenuScreen';

const Tab = createBottomTabNavigator<RootStackParams>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
