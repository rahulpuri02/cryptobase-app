import React from 'react'
import {BiSearch} from 'react-icons/bi';

function Search() {
  return (
   <form className='w-96 relative flex items-center ml-7'>
    <input className="w-full rounded bg-gray-200 placeholder:pl-2 outline-0 border border-transparent
    focus:border-[#808080]" type="text" name="search" placeholder='search here...'/>
    <button className="absolute right-1" type="submit">
    <BiSearch className='h-5 w-5 cursor-pointer'/>
    </button>
   </form>
  )
}

export default Search