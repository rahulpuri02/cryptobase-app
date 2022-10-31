import { useContext, useEffect } from "react";
import { createContext, useLayoutEffect, useState } from "react";
import { CryptoContext } from "./CryptoContext";

// create context object
export const StorageContext = createContext({});

// create the provider component
export const StorageProvider = ({ children }) => {
    const [allCoins, setAllCoins] = useState([]);
    const [saveData, setSaveData] = useState();
   
    let {currency, sortBy} = useContext(CryptoContext);

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

    const getSaveData = async (totalCoins = allCoins) => {
    
        try {
            const coin = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(",")}&order=${sortBy}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
            .then(res => res.json());
            setSaveData(coin);
           
    
        }catch(error){
            console.log(error);
        }
      };
    
 

 useEffect(() => {
    if(allCoins.length > 0){
        getSaveData(allCoins)
    }else {
        setSaveData();
    }
 }, [allCoins])

    useLayoutEffect(() => {
        let isStorage = JSON.parse(localStorage.getItem("coins")) || false;
    
        if (!isStorage) {
          //set the localstorage with empty array
          localStorage.setItem("coins", JSON.stringify([]));
        } else {
          //set the state with the current values from the local storage
          let totalCoins = JSON.parse(localStorage.getItem("coins"));
          setAllCoins(totalCoins);

          if(totalCoins.length > 0){
            getSaveData(totalCoins);
          }
        }
      }, []);

  return (
    <StorageContext.Provider
    value={{
        saveCoin,
        allCoins,
        removeCoin,
        saveData,
    }}
    >
      {children}
    </StorageContext.Provider>
  );
};