import {ImageBackground, StyleSheet,Text, View} from 'react-native';

const cardBackgroundImage = require('./../assets/images/cute-snowman-and-tree-pattern.jpg');

function Card({value, onPress, isRevealed}) {
  return (
    <View
      style={styles.cardWrapper}
    >
      {/* <ImageBackground 
        resizeMode='cover'
        source={cardBackgroundImage} 
        style={styles.cardBackground}
        defaultSource={cardBackgroundImage} 
      > */}
          <Text style={styles.cardLabel}>
            {!isRevealed ? '#' : value}
          </Text>
      
      {/* </ImageBackground>   */}
    </View>
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