import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Card from './Card';
import {charactersDataObj} from '../config';
import Panel from './Rider/Panel';
import {useRiderCards} from '../hooks/useRiderCards';

function RiderCards({gameData, riderData}): JSX.Element {
  const {id, selected, type} = riderData;

  const {
    isLastStep,
    isRiderLocked,
    hasSeletedCard,
    addExhaustionCard,
    selectCard,
    drawCards,
    areCardsReaviled,
    hasCardsInHand,
    getCurrentHand,
  } = useRiderCards();

  return (
    <View>
      <Panel image={charactersDataObj[type].image} {...riderData}>
        <>
          {hasCardsInHand(id) && (
            <Svg width="40" height="40" fill="orange" viewBox="0 0 16 16">
              <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </Svg>
          )}
          {isRiderLocked(id) && !hasSeletedCard(id) && !hasCardsInHand(id) && (
            <Svg width="40" height="40" fill="red" viewBox="0 0 16 16">
              <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z" />
            </Svg>
          )}
          {hasSeletedCard(id) && (
            <Svg width="40" height="40" fill="green" viewBox="0 0 16 16">
              <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </Svg>
          )}
          {!hasCardsInHand(id) &&
          !isRiderLocked(id) &&
          !hasSeletedCard(id) &&
          !isLastStep() ? (
            <Pressable
              style={styles.actionButton}
              disabled={isRiderLocked(id) || hasSeletedCard(id)}
              onPress={() => {
                drawCards(id);
              }}>
              <Text style={{color: 'white'}}>{'Draw cards'}</Text>
            </Pressable>
          ) : null}

          {hasSeletedCard(id) && isLastStep() && areCardsReaviled() ? (
            <Pressable
              style={styles.actionButton}
              onPress={() => addExhaustionCard(id)}>
              <Text>{'+ 2'}</Text>
            </Pressable>
          ) : null}
        </>
      </Panel>

      {hasCardsInHand(id) && (
        <View style={styles.smallCardsWrapper}>
          {getCurrentHand(id).map((card, index) => (
            <Card
              key={index}
              value={card}
              isRevealed={true}
              onSelect={() => selectCard(id, card)}
            />
          ))}
        </View>
      )}

      {hasSeletedCard(id) && (
        <View style={styles.smallCardsWrapper}>
          <Card
            value={selected[0]}
            isRevealed={gameData.cardsAreReaviled}
            onSelect={() => {}}
          />
        </View>
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
  actionButton: {
    height: '100%',
    backgroundColor: 'navy',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 100,
    paddingHorizontal: 15,
  },
  actionDisabled: {
    backgroundColor: '#cccccc',
  },
});

export default RiderCards;
