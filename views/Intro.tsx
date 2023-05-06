/**
 * Intro screen of App
 * Allows user to select the Character and prepare to game
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useContext, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextBase,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import type {NavigationAction} from '@react-navigation/routers';
import RidersContext from '../hooks/useRiderCards';
import {charactersData} from '../data';
import 'react-native-get-random-values';

function Intro({navigation}: NavigationAction) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {gameRiders, setGameRiders} = useContext(RidersContext);

  //https://stackoverflow.com/questions/73957936/react-state-showing-only-last-value
  const addCharacter = useCallback(
    (code: string, color: string, key: number): void => {
      const newCharacters = [...gameRiders];

      const data = charactersData.find(c => c.code === code);

      //  data.stash = [];
      // data.hand = [];
      //  data.selected = '';
      newCharacters.push(data);

      setGameRiders(newCharacters);
    },
    [gameRiders],
  );
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button
          title="Go to Game screen"
          onPress={() => navigation.navigate('Intro')}
        />
        <Button title="Help page" onPress={() => navigation.navigate('Help')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Intro;
