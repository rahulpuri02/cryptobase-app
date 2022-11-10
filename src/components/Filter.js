import React, { useContext, useRef } from 'react'
import Search from './Search'
import  submitIcon from '../assets/submit-icon.svg'
import { CryptoContext } from '../context/CryptoContext'
import Sort from './Sort';
import {BiReset} from 'react-icons/bi'

function Filter() {

 let {setCurrency, setSortBy, resetPage} = useContext(CryptoContext);
 const currencyRef = useRef(null);

 const handleCurrencySubmit = (e) => {
  e.preventDefault();
  let val = currencyRef.current.value;
  
  setCurrency(val);
  currencyRef.current.value= "";
 }

 const handleSort = (e) => {
  e.preventDefault();
  let val = e.target.value;
  setSortBy(val);
 }

  return (
    <div className='w-full h-12 border-2 border-[#808080] rounded-lg flex flex-col md:flex-row items-center justify-between relative'>
        <Search/>
        <div className='flex mr-7'>
          <form onSubmit={handleCurrencySubmit} className='relative flex items-center mr-12 '>
            <label className='flex items-center justify-center mr-2 font-bold' htmlFor="currency">Currency</label>
            <input ref={currencyRef} className='w-16 rounded bg-gray-200 pl-2 required outline-0 border border-transparent focus:border-[#808080] leading-4' type="text" name="currency" placeholder='usd'/>
            <button className='ml-[2px] cursor-pointer' type="submit">
            <img className='w-full h-auto' src={submitIcon} alt="submit-icon" />
            </button>
          </form>
       <Sort />
       <button className='w-6 ml-4 hover:scale-110 transition-all transition-ease' onClick={resetPage}>
          <BiReset className='w-full h-full text-blue' />
       </button>
        </div>
      
    </div>
  )
}

export default Filter