import {Button, ImageBackground, StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const cardBackgroundImage = require('./../assets/images/cute-snowman-and-tree-pattern.jpg');

function Card({value, onSelectCard, isRevealed}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.cardWrapper}
      onPress={onSelectCard}
    >
      {/* <ImageBackground 
        resizeMode='cover'
        source={cardBackgroundImage} 
        style={styles.cardBackground}
        defaultSource={cardBackgroundImage} 
      > */}
      {isRevealed ? <Text style={styles.cardLabel}>{value}</Text> : null}
      {/* </ImageBackground>   */}
    </TouchableOpacity>
  )    
}

const styles = StyleSheet.create({
  cardWrapper:{
    flex: 1,
    minWidth: '100%',
    height: 180,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: 'red',
    shadowColor: 'gray',
    shadowOpacity: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardLabel: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  cardBackground: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Card