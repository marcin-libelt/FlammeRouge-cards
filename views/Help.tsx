/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, Button} from 'react-native';
import Layout from './Layout';

function Help({navigation}): JSX.Element {
  return (
    <Layout title={'Help Page'}>
      <Button
        title="Go to Game screen"
        onPress={() => navigation.navigate('Game')}
      />
      <Button title="Help page" onPress={() => navigation.navigate('Help')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: '100%',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Help;
