import React, {useRef} from 'react';
import {View} from 'react-native';
import {charactersDataObj} from '../config';
import {useRiderCards} from '../hooks/useRiderCards';
import NewRiderForm from '../components/NewRiderForm';
import Layout from './Layout';
import RidersList from '../components/RidersList';
import AppButton from '../components/Button';

function Configure({navigation}): JSX.Element {
  const indexer = useRef(100);

  const {ridersData, setRidersData, gameData, setGameData} = useRiderCards();

  /**
   * set init game data object
   * and switch screen to start game
   */
  const startGame = () => {
    const gameDataInitObject = {
      ridersIds: ridersData.map((rider: object): number => rider.id),
      selectedCardsState: [],
      locked: [],
      cardsAreReaviled: false,
    };

    setGameData(gameDataInitObject);
    navigation.navigate('Game');
  };

  const addRider = (type: string, name: string) => {
    const newPlayer = {
      id: (indexer.current += 1),
      name: name,
      type: type,
      label: charactersDataObj[type].label,
      deck: [...charactersDataObj[type].deck],
      hand: [],
      stash: [],
      selected: [],
    };

    setRidersData([...ridersData, newPlayer]);
  };

  return (
    <Layout title={'Configurator'}>
      <View>
        <RidersList />
        <NewRiderForm onAddRider={addRider} />
      </View>
      <AppButton onPress={startGame} title="Start game" variant="primary" />
    </Layout>
  );
}

export default Configure;
