import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import RiderButton from './RiderButton';
import {charactersDataObj} from '../config';
import {getFakeName} from '../data';

function NewRiderForm({onAddRider}) {
  const submitRider = type => {
    onAddRider(type, getFakeName());
    return;

    fetch(
      'https://api.parser.name/?api_key=65ae76a9a472817634b02508d964689e&endpoint=generate&gender=m&country_code=DE',
    )
      .then(response => response.json())
      .then(result => {
        if (!result.error) {
          const name = `${result.data[0].name.firstname.name} ${result.data[0].name.lastname.name}`;
          onAddRider(type, name);
        }
      });
  };

  return (
    <View style={styles.container}>
      {Object.keys(charactersDataObj).map((code, index) => {
        const {image} = charactersDataObj[code];
        return (
          <RiderButton
            key={index}
            onSelect={() => submitRider(code)}
            image={image}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 15,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  input: {
    fontSize: 16,
    height: 40,
    marginVertical: 12,
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 10,
    color: '#ffffff',
  },
});

export default NewRiderForm;
