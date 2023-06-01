import {StyleSheet, View} from 'react-native';

function CardsWrapper({children}) {
  return <View style={styles.smallCardsWrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  smallCardsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default CardsWrapper;
