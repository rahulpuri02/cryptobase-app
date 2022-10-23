import { createContext, useLayoutEffect, useState } from "react";

//create context object
export const CryptoContext = createContext({});

//create the provider component
export const CryptoProvider = ({children}) => {

  const[cryptoData, setCryptoData] = useState();
  const[cryptoSearch, setCryptoSearch] = useState();


  {/* Coin Market Stats */}
  const getCryptoData = async (query) => {
     
    try {
        const coin = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}}`)
        .then(res => res.json());
       console.log(coin);
        setCryptoData(coin);

    }catch(error){
        console.log(error);
    }
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [])

    {/* Coin Search Filter */}
    const getCryptoSearch = async () => {
     
      try {
          const coin = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
          .then(res => res.json());
         console.log(coin);
          setCryptoSearch(coin);
  
      }catch(error){
          console.log(error);
      }
    };
  
    useLayoutEffect(() => {
      getCryptoSearch();
    }, [])
    
  
  return (
        <CryptoContext.Provider value={{cryptoData, cryptoSearch}}>
            {children}
        </CryptoContext.Provider>
    )
}