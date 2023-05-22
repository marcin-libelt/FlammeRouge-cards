import {StyleSheet, Text} from 'react-native';
import type {PropsWithoutRef} from 'react';

type CardProps = PropsWithoutRef<{
  value: string[];
  onSelect: Function;
  isRevealed: boolean;
}>;

function Card({onSelect, isRevealed, value}: CardProps): JSX.Element {
  return (
    <Text style={styles.smallCard} onPress={onSelect}>
      {isRevealed ? value : ''}
    </Text>
  );
}

const styles = StyleSheet.create({
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

export default Card;
