import debounce from 'lodash.debounce';
import React, { useContext, useState } from 'react'
import {BiSearch} from 'react-icons/bi';
import { CryptoContext } from '../context/CryptoContext';

const SearchInput = ({handleSearch}) => {
const[searchText, setSearchText] = useState("");

let handleInput = (e) => {
  e.preventDefault();
  let query = e.target.value;
  setSearchText(query);
  handleSearch(query);
}
 return (
  <>
  <form className='w-96 relative flex items-center ml-7'>
  <input onChange={handleInput} value={searchText} className="w-full rounded bg-gray-200 placeholder:pl-2 outline-0 border border-transparent
  focus:border-[#808080]" type="text" name="search" placeholder='search here...'/>
  <button className="absolute right-1" type="submit">
  <BiSearch className='h-5 w-5 cursor-pointer'/>
  </button>
 </form>
 {
  searchText.length > 0 ?
  <ul className='absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
    <li>Bitcoin</li>
    <li>ethereum</li>
    <li>xrp</li>
    <li>weweewe</li>
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
 }, 2000)
  return (
  <>
  <SearchInput handleSearch={debounceFunc}/>
   </>
  )
}

export default Search