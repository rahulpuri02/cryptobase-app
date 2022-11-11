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
    <div className='w-full h-full  border-2 border-[#808080] rounded-lg flex items-center justify-between relative space-x-3'>
        <Search/>
        <div className='flex'>
        <form onSubmit={handleCurrencySubmit} className='relative flex items-center mr-1 md:mr-10 lg:mr-12'>
            <label className='flex items-center justify-center mr-1 md:mr-2 sm:text-xs md:text-sm' htmlFor="currency">Currency:</label>
            <input ref={currencyRef} className='w-16 rounded bg-gray-200 pl-2 required outline-0 border border-transparent focus:border-[#808080] leading-4' type="text" name="currency" placeholder='usd'/>
            <button className='cursor-pointer w-6 h-6' type="submit">
            <img className='w-full h-auto' src={submitIcon} alt="submit-icon" />
            </button>
          </form>
       <Sort />
        </div>
      
    </div>
  )
}

export default Filter