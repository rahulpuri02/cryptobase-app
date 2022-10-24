import React, { useContext, useRef } from 'react'
import Search from './Search'
import  submitIcon from '../assets/submit-icon.svg'
import { CryptoContext } from '../context/CryptoContext'
function Filter() {

 let {setCurrency, setSortBy} = useContext(CryptoContext);
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
    <div className='w-full h-12 border-2 border-[#808080] rounded-lg flex items-center justify-between relative'>
        <Search/>
        <div className='flex mr-7'>
          <form onSubmit={handleCurrencySubmit} className='relative flex items-center mr-12 '>
            <label className='flex items-center justify-center mr-2 font-bold' htmlFor="currency">Currency</label>
            <input ref={currencyRef} className='w-16 rounded bg-gray-200 pl-2 required outline-0 border border-transparent focus:border-[#808080] leading-4' type="text" name="currency" placeholder='usd'/>
            <button className='ml-[2px] cursor-pointer' type="submit">
            <img className='w-full h-auto' src={submitIcon} alt="submit-icon" />
            </button>
          </form>
          <label className='relative flex justify-center items-center'>
       <span className='font-bold mr-3'>Sort By: </span>
        <select onClick={handleSort} className='rounded bg-gray-200 text-base pl-2 pr-8 py-0.5 leading-4 capitalize outline-0 focus:border' name="sortby" >
          {/*market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc */}
          <option value="market_cap_desc">market cap desc</option>
          <option value="market_cap_asc">market cap asc</option>
          <option value="gecko_asc">gecko asc</option>
          <option value="gecko_desc">gecko desc</option>
          <option value="volume_asc">volume asc</option>
          <option value="volume_desc">volume desc</option>
          <option value="id_asc">id asc</option>
          <option value="id_desc">id desc</option>
        </select>
       </label>
        </div>
      
    </div>
  )
}

export default Filter