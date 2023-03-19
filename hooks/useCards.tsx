/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import { shuffle } from '../helpers/arrays';
import { roulerCards, sprinterCards } from '../data';

const useCards = () => {
  
  const [hand, setHand] = useState<string[]>([])
  const [stash, setStash] = useState<string[]>([])
  const [deck, setDeck] = useState<string[]>(shuffle(roulerCards))
  const [selectedCard, setSelectedCard] = useState<string[]>([])

  const resetCards = () => {
    setDeck(roulerCards)
    setHand([])
    setStash([])
    setSelectedCard([])
  }
  
  const chooseACard = (index: number) => {
    
    let thisHand = [...hand] // 2239
    let selected = thisHand.splice(index, 1);
    let newStash = [...stash].concat(thisHand)

    setStash(newStash)
    setSelectedCard(selected)
    setHand([])
  }

  const addExhaustedCard = () => {
    let newStash = [...stash]
    newStash.push('2')
    setStash(newStash)
  }

  const drawCards = () => {
    let temporaryHand: string[] = [];

    let newDeck = [...deck]
    let newStash = [...stash]

    const deckLength = newDeck.length;
    const stashLength = newStash.length;
    
    if(deckLength >= 4) {
      temporaryHand = newDeck.splice(0,4)
      setDeck(newDeck)
   } else if(deckLength < 4 ) {
      temporaryHand = temporaryHand.concat(newDeck.splice(0)) // weź wszystko

      if(stashLength) {
        // Fullfil Hand up to 4 
        temporaryHand = temporaryHand.concat(newStash.splice(0, 4 - deckLength))
        
        // Move all remaing stash to new Deck and shuffle
        setDeck(shuffle(newStash.splice(0)));
        setStash([]);
      } else {
        setDeck([]);
      }
    }

    if(temporaryHand.length < 1) {
      temporaryHand.push('2')
    }

    setHand(temporaryHand);  
  }

  return {
    addExhaustedCard: addExhaustedCard,
    chooseACard: chooseACard,
    drawCards: drawCards,
    resetCards: resetCards,
    deck: deck,
    hand: hand,
    stash: stash,
    selectedCard: selectedCard
  }
};

export default useCards;