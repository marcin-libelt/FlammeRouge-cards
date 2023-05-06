/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {NavigationAction} from '@react-navigation/routers';
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

function Help({navigation}: NavigationAction): JSX.Element {
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Help Page</Text>
        <Button
          title='Go to Game screen'
          onPress={() => navigation.navigate('Game')} /> 
        <Button
          title='Help page'
          onPress={() => navigation.navigate('Help')} /> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: '100%',
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default Help;
