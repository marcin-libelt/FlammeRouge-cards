import React, {createContext, useContext, useState} from 'react';

const RiderCardsContext = createContext(null);

function RiderCardsProvider({children}) {
  const [gameData, setGameData] = useState({});
  const [ridersData, setRidersData] = useState([]);

  return (
    <RiderCardsContext.Provider
      value={{gameData, setGameData, ridersData, setRidersData}}>
      {children}
    </RiderCardsContext.Provider>
  );
}

export const useRiderCards = () => useContext(RiderCardsContext);
export default RiderCardsProvider;
