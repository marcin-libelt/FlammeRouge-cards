import {Pressable, StyleSheet, Text} from 'react-native';

function Button({
  onPress,
  title = 'Click',
  variant = 'primary',
  disabled = false,
}) {
  const fontSize = variant === 'primary' ? 20 : 16;

  return (
    <Pressable
      onPress={() => onPress()}
      disabled={disabled}
      style={[styles.button, styles[variant]]}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize,
        }}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  primary: {
    backgroundColor: 'orange',
    paddingVertical: 20,
  },
  secondary: {
    backgroundColor: 'blue',
  },
});

export default Button;
