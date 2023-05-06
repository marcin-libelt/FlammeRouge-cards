/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useCallback, useMemo} from 'react';
import type {NavigationAction} from '@react-navigation/routers';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Debugger from '../components/Debugger';

import RiderCards from '../components/RiderCards';

function Game({route, navigation}: NavigationAction): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: 'black',
  };

  const gameDataInitObject = {
    ridersIds: route.params.players.map((rider: object): number => rider.id),
    selectedCardsState: [],
    locked: [],
    cardsAreReaviled: false,
  };

  const [gameData, setGameData] = useState(gameDataInitObject);
  const [ridersData, setRidersData] = useState(route.params.players);

  const isLastStep = () =>
    gameData.selectedCardsState.length === ridersData.length;

  const revealAllCards = () => {
    setGameData({...gameData, cardsAreReaviled: true});
  };

  const startNewRound = () => {
    const newGameData = {...gameData};
    const newRidersData = [...ridersData];

    newGameData.cardsAreReaviled = false;
    newGameData.selectedCardsState.length = 0;
    newGameData.locked.length = 0;

    newRidersData.forEach(rider => {
      rider.selected.length = 0;
    });

    setGameData(newGameData);
    setRidersData(newRidersData);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.heading}>Game</Text>
        <View>
          <Button
            title="Go to Intro"
            onPress={() => navigation.navigate('Configure')}
          />
          {ridersData.map(rider => (
            <RiderCards
              key={rider.id}
              riderId={rider.id}
              ridersData={ridersData}
              gameData={gameData}
              riderData={rider}
              setGameData={setGameData}
              setRidersData={setRidersData}
            />
          ))}
          {isLastStep() ? (
            !gameData.cardsAreReaviled ? (
              <Button
                color={'green'}
                onPress={() => revealAllCards()}
                title={'Reavil cards!'}
              />
            ) : (
              <Button
                onPress={() => startNewRound()}
                title={'Start new round!'}></Button>
            )
          ) : (
            ''
          )}
        </View>

        <Debugger data={{ridersData, gameData}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
  smallCardsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  smallCard: {
    width: 30,
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    borderRadius: 3,
    margin: 2,
    display: 'flex',
  },
});

export default Game;
