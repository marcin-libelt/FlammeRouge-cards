/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {NavigationAction} from '@react-navigation/routers';
import {StyleSheet, Button} from 'react-native';
import Debugger from '../components/Debugger';
import RiderCards from '../components/RiderCards';
import {useRiderCards} from '../hooks/useRiderCards';
import Layout from './Layout';

function Game({navigation}: NavigationAction): JSX.Element {
  const {gameData, setGameData, ridersData, setRidersData} = useRiderCards();

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
    <Layout title={'Game'}>
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
      <Debugger data={(gameData, ridersData)} />
    </Layout>
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
