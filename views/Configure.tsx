/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {NavigationAction} from '@react-navigation/routers';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

import {charactersDataObj} from '../data';
import {useRiderCards} from '../hooks/useRiderCards';
import Debugger from '../components/Debugger';

function Riders({players}) {
  return (
    <View style={styles.topInfo}>
      <Text>Players:</Text>
      {!players.length ? (
        <Text>No players found</Text>
      ) : (
        players.map((player, index) => (
          <Text key={index} style={{color: 'pink'}}>
            {`${player.name} (${player.id}) - ${player.deck}`}
          </Text>
        ))
      )}
    </View>
  );
}

function RidersSelector({type, onTypeSelection}) {
  return (
    <View>
      {Object.keys(charactersDataObj).map((code, index) => (
        <Button
          key={index}
          color={type === code ? 'green' : 'gray'}
          onPress={() => onTypeSelection(code)}
          title={charactersDataObj[code].label}
        />
      ))}
    </View>
  );
}

function Configure({navigation}: NavigationAction): JSX.Element {
  const indexer = useRef(91);

  const [name, setName] = useState('');
  const [type, setType] = useState('rouler');

  const {ridersData, setRidersData, gameData, setGameData} = useRiderCards();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /**
   * set init game data object
   * and switch screen to start game
   */
  const startGame = () => {
    const gameDataInitObject = {
      ridersIds: ridersData.map((rider: object): number => rider.id),
      selectedCardsState: [],
      locked: [],
      cardsAreReaviled: false,
    };

    setGameData(gameDataInitObject);
    navigation.navigate('Game');
  };

  const addPlayer = () => {
    let newPlayer = {
      id: indexer.current,
      name: name,
      type: type,
      label: charactersDataObj[type].label,
      deck: [...charactersDataObj[type].deck],
      hand: [],
      stash: [],
      selected: [],
    };

    setRidersData([...ridersData, newPlayer]);
    setName('');

    indexer.current += 1;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text style={styles.heading}>Configurator</Text>
        <Riders players={ridersData} />
        <RidersSelector type={type} onTypeSelection={setType} />
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <Button onPress={addPlayer} title={'Add Player'} />
      </View>
      <Button title="Start game" color={'orange'} onPress={() => startGame()} />

      <Debugger data={{ridersData, gameData}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topInfo: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
  },
  heading: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});

export default Configure;
