import React from 'react';
import {
  Image,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type RiderButtonType = {
  onSelect: (event: GestureResponderEvent) => void;
  image: string;
};

function RiderButton({onSelect, image}: RiderButtonType): JSX.Element {
  return (
    <TouchableOpacity style={{...styles.riderBox}} onPress={onSelect}>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  riderBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'pink',
    borderRadius: 2,
    height: 80,
  },
  riderImageLabel: {
    alignSelf: 'center',
    color: '#da7f8f',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default RiderButton;
