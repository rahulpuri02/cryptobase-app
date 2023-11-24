import debounce from 'lodash.debounce';
import React, { useContext} from 'react'
import { CryptoContext } from '../context/CryptoContext';
import SearchInput from './SearchInput';


function Search() {

  let {getSearchResult} = useContext(CryptoContext);

  //debounce function will wait for 2 sec before calling the api to response for search-result

 const debounceFunc = debounce((value) => {
  getSearchResult(value)
 }, 2000)
  return (
  <div className='relative w-full'>
  <SearchInput handleSearch={debounceFunc}/>
   </div>
  )
}

export default Search