/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {memo, useEffect, useRef, useState} from 'react';
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
import CardDrawer from '../components/CardDrawer';

function Game({navigation}: NavigationAction): JSX.Element {
  const {
    addExhaustedCard,
    selectCard,
    drawCards,
    resetCards,
    revealCards,
    deck,
    hand,
    stash,
    selectedCard,
    isRevealed
  } = useCards();

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

          <Button disabled={hand.length > 0} title='Draw 4 Cards' onPress={drawCards} />

          <CardBoard> 
            {hand.length > 0 ? (
              <CardDrawer
                hand={hand} 
                selectCard={selectCard} 
                isRevealed={isRevealed}
              >
                <Button 
                  onPress={revealCards} 
                  title='Preview cards'
                  disabled={isRevealed}
                />
              </CardDrawer>
            ) : null}
          </CardBoard>
          <Button
            disabled={!deck.length && !stash.length && !stash.length}
            title={`Add exhausting card`} onPress={addExhaustedCard} 
          />
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

});

export default Game;
