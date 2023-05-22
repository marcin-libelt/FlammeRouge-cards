import {Image, StyleSheet, Text, View} from 'react-native';

function Avatar({image}) {
  return (
    <View>
      <Image style={styles.avatar} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    flex: 1,
    borderRadius: 100,
  },
});

export default Avatar;
