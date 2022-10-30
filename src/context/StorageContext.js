import { createContext, useLayoutEffect, useState } from "react";

// create context object
export const StorageContext = createContext({});

// create the provider component
export const StorageProvider = ({ children }) => {
    const [allCoins, setAllCoins] = useState([]);

    const saveCoin = (coinId) => {
     let oldCoins = JSON.parse(localStorage.getItem("coins"));

     if(oldCoins.includes(coinId)){
        return null;
     } else {
      let newCoin = [...oldCoins, coinId];
      setAllCoins(newCoin);
      localStorage.setItem("coins", JSON.stringify(newCoin));
     }
    }

    const removeCoin = (coinId) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"));

        let newCoin = oldCoins.filter(coin => coin !== coinId);
        setAllCoins(newCoin);
    localStorage.setItem("coins", JSON.stringify(newCoin));
    }

    useLayoutEffect(() => {
        let isStorage = JSON.parse(localStorage.getItem("coins")) || false;
    
        if (!isStorage) {
          //set the localstorage with empty array
          localStorage.setItem("coins", JSON.stringify([]));
        } else {
          //set the state with the current values from the local storage
          let totalCoins = JSON.parse(localStorage.getItem("coins"));
          setAllCoins(totalCoins);
        }
      }, []);

  return (
    <StorageContext.Provider
    value={{
        saveCoin,
        allCoins,
        removeCoin,
    }}
    >
      {children}
    </StorageContext.Provider>
  );
};