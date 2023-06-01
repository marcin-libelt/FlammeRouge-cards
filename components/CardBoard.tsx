import {StyleSheet, View} from 'react-native';

function CardBoard({children}) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#6c453d',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default CardBoard;
