import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import Layout from './Layout';

function Intro(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const bg = require('./../assets/images/disnay-pattern.png');

  return (
    <Layout>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <ImageBackground
              source={bg}
              resizeMode="repeat"
              style={[styles.bg]}>
              <View style={{borderRadius: 20, width: '100%', height: '100%'}}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </ImageBackground>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '80%',
    borderRadius: 25,
    borderWidth: 10,
    borderColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  bg: {
    width: '100%',
    borderRadius: 25,
  },
});

export default Intro;
