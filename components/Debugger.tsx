import {StyleSheet, Text, View} from 'react-native';

function Debugger({data}): JSX.Element {
  return (
    <View style={styles.debug}>
      {Object.keys(data).map((item, index) => (
        <View key={index}>
          <Text style={styles.title}>{item}</Text>
          <Text style={styles.section}>{JSON.stringify(data[item])}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  debug: {
    padding: 10,
    backgroundColor: 'orange',
    marginTop: 5,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Debugger;
