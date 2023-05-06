import React, {useState, useCallback, useMemo} from 'react';
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

import Card from './Card';
import {shuffle} from '../helpers/arrays';
import {exhaustionCardValue} from '../data';

function RiderCards({
  riderId,
  ridersData,
  gameData,
  riderData,
  setGameData,
  setRidersData,
}): JSX.Element {
  const {name, id, hand, selected} = riderData;

  const isLocked = riderId => -1 < gameData.locked.indexOf(riderId);
  const hasSeletedCard = riderId =>
    -1 < gameData.selectedCardsState.indexOf(riderId);

  const getIndexOfArrayState = (riderId): number => {
    return ridersData.findIndex(rider => rider.id === riderId);
  };

  // zmienic nazwe - bo za duzo sie tu dzieje
  const selectCard = (riderId, card) => {
    const newRidersData = [...ridersData],
      currentGameData = {...gameData},
      currentRider = newRidersData[getIndexOfArrayState(riderId)],
      cardIndex = currentRider.hand.findIndex(c => c === card),
      selectedCard = currentRider.hand.splice(cardIndex, 1),
      newStash = currentRider.stash.concat(currentRider.hand.splice(0));

    currentRider.stash = newStash;
    currentRider.selected = selectedCard;

    currentGameData.selectedCardsState.push(riderId);
    currentGameData.locked = [];

    setRidersData(newRidersData);
    setGameData(currentGameData);
  };

  const drawCards = riderId => {
    let temporaryHand: string[] = [],
      shuffledStash;

    const newRidersData = [...ridersData],
      currentRider = newRidersData[getIndexOfArrayState(riderId)],
      deckLength = currentRider.deck.length,
      stashLength = currentRider.stash.length;

    // Jeśli Deck jest duzy
    if (deckLength >= 4) {
      temporaryHand = currentRider.deck.splice(0, 4);
    } else if (deckLength < 4) {
      // weź pozostałośc deck do ręki
      temporaryHand = temporaryHand.concat(currentRider.deck.splice(0)); // weź wszystko

      // jeśli jest cos w stash to na poczatku potasuj karty
      if (stashLength) {
        // potasuj karty ze stasha
        shuffledStash = shuffle(currentRider.stash);
        // Fullfil Hand up to 4
        temporaryHand = temporaryHand.concat(
          shuffledStash.splice(0, 4 - deckLength),
        );
        currentRider.deck = shuffledStash.splice(0);
      } else {
        currentRider.deck = [];
      }
    }

    if (temporaryHand.length < 1) {
      temporaryHand.push('2');
    }

    currentRider.hand = temporaryHand;

    setRidersData(newRidersData);

    //lockAllRiders
    setGameData({...gameData, locked: gameData.ridersIds});
  };

  const isLastStep = () =>
    gameData.selectedCardsState.length === ridersData.length;

  const addExhaustionCard = useCallback(
    riderId => {
      const newRidersData = [...ridersData],
        currentRider = newRidersData[getIndexOfArrayState(riderId)];

      currentRider.stash.push(exhaustionCardValue);

      setRidersData(newRidersData);
    },
    ['riderId'],
  );

  return (
    <View>
      <Text style={{color: 'black'}}>{name}</Text>
      {console.log(name, id, hand, selected)}
      {gameData.selectedCardsState.length !== ridersData.length ? (
        <Button
          disabled={isLocked(id) || hasSeletedCard(id)}
          onPress={() => {
            drawCards(id);
          }}
          title={name}
        />
      ) : (
        ''
      )}

      <View style={styles.smallCardsWrapper}>
        {hand.map((card, index) => (
          <Card
            key={index}
            value={card}
            isRevealed={true}
            onSelect={() => selectCard(id, card)}
          />
        ))}
      </View>

      {selected.length > 0 ? (
        <View style={styles.smallCardsWrapper}>
          <Card
            value={selected[0]}
            isRevealed={gameData.cardsAreReaviled}
            onSelect={() => {}}
          />
          {isLastStep() && gameData.cardsAreReaviled ? (
            <Button onPress={() => addExhaustionCard(id)} title={'+ 2'} />
          ) : (
            ''
          )}
        </View>
      ) : (
        ''
      )}
    </View>
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

export default RiderCards;
