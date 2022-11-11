import debounce from 'lodash.debounce';
import React, { useContext, useState } from 'react'
import {BiSearch} from 'react-icons/bi';
import { CryptoContext } from '../context/CryptoContext';

const SearchInput = ({handleSearch}) => {
const[searchText, setSearchText] = useState("");
let {searchData, setCoinSearch, setSearchData} = useContext(CryptoContext);


let handleInput = (e) => {
  e.preventDefault();
  let query = e.target.value;
  setSearchText(query);
  handleSearch(query);
}

const handleSubmit = (e) => {
  e.preventDefault();
  handleSearch(searchText);
}

const selectCoin = (coin) => {
 setCoinSearch(coin);
 setSearchText("");
 setSearchData();
}
 return (
  <>
  <form  onSubmit={handleSubmit} 
  className='w-full relative flex items-center px-2 md:px-4 py-2'>
  <input onChange={handleInput} value={searchText} className="w-full text-sm rounded bg-gray-200 placeholder:pl-2 outline-0 border border-transparent
  focus:border-[#808080]" type="text" name="search" placeholder='search'/>
  <button className="absolute right-2 md:right-5" type="submit">
  <BiSearch className='w-4 h-auto cursor-pointer'/>
  </button>
 </form>
 {
  searchText.length > 0 ?
  <ul className='absolute top-11 right-0 w-full h-[230px] md:h-[300px] rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
  {
    searchData ? 
    searchData.map(coin => { return <li className='flex items-center ml-4 my-2 cursor-pointer'
     key={coin.id} onClick={() => selectCoin(coin.id)}>
        <img className='w-6 h-4 mx-3' src={coin.thumb} alt={coin.name} />
        <span>{coin.name}</span></li>}) 
        : <div className='w-full h-full flex justify-center items-center'>
          <div className='w-6 h-6 border-4 border-blue rounded-full border-b-gray-200 animate-spin' role="status"/>
          <span className='ml-2 text-sm'>Searching...</span>   
        </div>

  }
  </ul> : null
 }
 </>

 )
}

function Search() {

  let {getSearchResult} = useContext(CryptoContext);

  //debounce function will wait for 2 sec before calling the api to response for search-result

 const debounceFunc = debounce(function(value){
  getSearchResult(value)
 }, 1500)
  return (
  <div className='relative'>
  <SearchInput handleSearch={debounceFunc}/>
   </div>
  )
}

export default Search