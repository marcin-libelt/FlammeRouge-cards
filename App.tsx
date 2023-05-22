/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from './views/Game';
import Configure from './views/Configure';
import Help from './views/Help';
import RiderCardsProvider from './hooks/useRiderCards';
import Intro from './views/Intro';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RiderCardsProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name="Intro" component={Intro} /> */}
          <Stack.Screen name="Configure" component={Configure} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
      </NavigationContainer>
    </RiderCardsProvider>
  );
}

export default App;
