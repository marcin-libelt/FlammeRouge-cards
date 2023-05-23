import {StyleSheet, Text, View} from 'react-native';
import {useRiderCards} from '../hooks/useRiderCards';
import {charactersDataObj} from '../config';
import RiderPanel from './Rider/Panel';

function RidersList() {
  const {ridersData} = useRiderCards();

  return (
    <View style={styles.topInfo}>
      {!ridersData.length ? (
        <View>
          <Text
            style={
              styles.legend
            }>{`Select rider types.\nTypical game assumes 2 riders: Sprinter and Rouler.`}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.legend}>{`Your riders:`}</Text>
          {ridersData.map((rider, index) => (
            <RiderPanel
              key={rider.id}
              image={charactersDataObj[rider.type].image}
              {...rider}></RiderPanel>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  legend: {
    color: 'white',
    marginLeft: 15,
    marginVertical: 5,
    lineHeight: 20,
  },
  topInfo: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    borderRadius: 15,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
});

export default RidersList;
