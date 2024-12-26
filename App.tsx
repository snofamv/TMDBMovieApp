/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/presentation/routers/StackNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
