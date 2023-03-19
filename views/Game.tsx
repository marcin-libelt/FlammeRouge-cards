/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {memo, useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import type {
  DefaultRouterOptions,
  InitialState,
  NavigationAction,
  NavigationState,
  ParamListBase,
  PartialState,
  Route,
  
} from '@react-navigation/routers';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import CardBoard from '../components/CardBoard';
import useCards from '../hooks/useCards';
import Card from '../components/Card';
import { revealInterval} from '../data';

type RandomCardsProps = PropsWithChildren<{
  hand: string[],
  cardHandler: Function,
  isRevealed: boolean
}>;

function RandomCards({children, hand, cardHandler, isRevealed}: RandomCardsProps): JSX.Element {
  return (
    <View>
      <Text style={{
        marginBottom: 10,
        color: 'black',
        }}>
          {`Choose one card to play`}
      </Text>
      <View style={
        styles.handCardsLayout
      }>
        {hand.map((cardValue, index) => (
          <View
            key={Math.random() * 100}
            style={{
              width: '48%',
              marginBottom: '2%'
            }}
          >
            <Card    
              onPress={() => cardHandler(index)} 
              value={cardValue}
              isRevealed={isRevealed}
              />
          </View>
        ))}
      </View>
      {children}
    </View>
  )
}

function Game({navigation}: NavigationAction): JSX.Element {
  const {
    addExhaustedCard,
    chooseACard,
    drawCards,
    resetCards,
    deck,
    hand,
    stash,
    selectedCard,
  } = useCards();

  let revealedCardsIntervalId = useRef(0);

  const [isRevealed, setIsRevealed] = useState<boolean>(false)
  const revealCards = () => {    

    clearInterval(revealedCardsIntervalId.current);
    setIsRevealed(true);

    const intervalId = setTimeout(() => {
      setIsRevealed(false);
    }, 3 * 1000);
    revealedCardsIntervalId.current = intervalId;
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
        <View
          style={{
            padding: 20
          }}>
          <Button
            title="Go to Intro"
            onPress={() => navigation.navigate('Intro')}
          />
          <View>
            <Text>Deck: { deck.map((n) => `◼️`)}</Text>
            <Text>Stash: { stash.map((n) => `◼️`)}</Text>
          </View>
          <Button title='ReInit Deck' onPress={resetCards} />
          <Button disabled={hand.length > 0} title='Get 4 Random Cards' onPress={drawCards} />
          <CardBoard> 
            {hand.length > 0 ? (
              <RandomCards
                hand={hand} 
                cardHandler={chooseACard} 
                isRevealed={isRevealed}
              >
                <Button 
                  onPress={revealCards} 
                  title='Show cards'
                  
                />
              </RandomCards>
            ) : null}
          </CardBoard>
          <Button disabled={!deck.length && !stash.length && !stash.length} title={`Add exhausting card`} onPress={addExhaustedCard} />
        </View>
        <View
          style={{
            padding: 20,
            backgroundColor: 'orange',
          }}>
          <Text>Hand {hand}</Text>
          <Text>Stash {stash}</Text>
          <Text>Deck {deck}</Text>
          <Text>Selected Card {selectedCard}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  handCardsLayout:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Game;
