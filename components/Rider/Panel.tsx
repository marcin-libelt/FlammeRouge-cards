import {StyleSheet, Text, View} from 'react-native';
import Avatar from './Avatar';
import {ucFirst} from '../../helpers/strings';

function Panel({
  children,
  image,
  name = '',
  type = '',
  backgroundColor = '#6666FF',
}) {
  return (
    <View style={[styles.panel, {backgroundColor}]}>
      <Avatar image={image} />
      <View style={styles.panelInner}>
        <Text style={styles.label}>{`(${ucFirst(type.substr(0, 1))}) ${ucFirst(
          name,
        )}`}</Text>
      </View>
      {children ?? <View style={styles.actionTab}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    height: 50,
    padding: 5,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
  },
  panelInner: {
    width: '100%',
    flex: 1,
  },
  label: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  actionTab: {
    alignSelf: 'flex-end',
  },
});

export default Panel;
