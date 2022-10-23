import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi';

function Search() {
  const[searchText, setSearchText] = useState("");
  
  let handleInput = (e) => {
    e.preventDefault();
    let input = e.target.value;
   // console.log(input);
    setSearchText(input);

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

export default Search