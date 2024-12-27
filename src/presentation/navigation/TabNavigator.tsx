// Archivo actual: TabNavigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {RootStackParams} from './StackNavigator';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

const Tab = createBottomTabNavigator<RootStackParams>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
