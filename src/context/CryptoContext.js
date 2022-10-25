import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({children}) => {

const[cryptoData, setCryptoData] = useState();
const[searchData, setSearchData] = useState();
const[coinSearch, setCoinSearch] = useState("");
const[currency, setCurrency] = useState("usd");
const[sortBy, setSortBy] = useState("market_cap_desc")
const[page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(50);

    const getCryptoData = async () => {
     
      try {
        const coinList = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
        .then(res => res.json());
        setTotalPages(coinList.length);

    }catch(error){
        console.log(error);
    }

      try {
          const coin = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
          .then(res => res.json());
          setCryptoData(coin);
  
      }catch(error){
          console.log(error);
      }
    };
  
  

const getSearchResult= async (query) => {
 
  try {
    const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
      .then(res => res.json());
      console.log(data)
      setSearchData(data.coins);

  }catch(error){
      console.log(error);
  }
};


useLayoutEffect(() => {
  getCryptoData();
},[coinSearch, currency, sortBy, page])
 
  
  return (
        <CryptoContext.Provider value={{
          cryptoData,
          searchData, 
          getSearchResult, 
          setCoinSearch, 
          setSearchData, 
          currency, 
          setCurrency,
          sortBy,
          setSortBy,
          page,
          setPage,
          totalPages}}>
            {children}
        </CryptoContext.Provider>
    )
}