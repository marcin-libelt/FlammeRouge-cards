/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

function CardBoard({children}) {
  return (
    <View style={
      styles.sectionContainer
    }>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#0cc7cc',
    padding: 24,
  }
});
  
export default CardBoard;