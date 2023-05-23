import React from 'react';
import type {NavigationAction} from '@react-navigation/routers';
import {StyleSheet, Button} from 'react-native';
import RiderCards from '../components/RiderCards';
import {useRiderCards} from '../hooks/useRiderCards';
import Layout from './Layout';

function Game({navigation}: NavigationAction): JSX.Element {
  const {
    gameData,
    ridersData,
    revealAllCards,
    startNewRound,
    isLastStep,
    areCardsReaviled,
  } = useRiderCards();

  return (
    <Layout title={'Game'}>
      <Button
        title="Go to Intro"
        onPress={() => navigation.navigate('Configure')}
      />
      {ridersData.map(rider => (
        <RiderCards
          key={rider.id}
          gameData={gameData}
          riderData={rider}
        />
      ))}
      {isLastStep() ? (
        !areCardsReaviled() ? (
          <Button
            color={'green'}
            onPress={revealAllCards}
            title={'Reavil cards!'}
          />
        ) : (
          <Button onPress={startNewRound} title={'Start new round!'}></Button>
        )
      ) : (
        ''
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({});

export default Game;
