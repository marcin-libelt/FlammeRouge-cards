import {View, Text, StyleSheet} from 'react-native';
import {useRiderCards} from '../hooks/useRiderCards';

function CardsStack({riderId, stack, direction}) {
  const {getCardStack} = useRiderCards();

  const cards = getCardStack(riderId, stack);

  return (
    <Text style={[styles.stack, styles[direction]]}>
      {cards.map(() => (direction === 'ltr' ? ']' : '['))}
    </Text>
  );
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
  },
  ltr: {
    textAlign: 'left',
  },
  rtl: {
    textAlign: 'right',
  },
});

export default CardsStack;
