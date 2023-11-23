import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext';

const Sort = () => {
   
    let {setSortBy} = useContext(CryptoContext);

    const handleSort = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setSortBy(val);
       }
  return (
    <label className='relative md:flex justify-center items-center mr-2'>
    <span className='font-semibold text-xs md:text-sm  mr-2 md:mr-2 lg:mr-3'>Sort By: </span>
     <select onClick={handleSort} className='rounded bg-gray-200 text-xs md:text-sm  p-0.5 md:px-1 md:py-0.5 font-normal capitalize outline-0 focus:border mr-4' name="sortby" >
       {/*market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, id_asc, id_desc */}
       <option value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market cap asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="volume_asc">volume asc</option>
            <option value="id_desc">id desc</option>
            <option value="id_asc">id asc</option>
            <option value="gecko_desc">gecko desc</option>
            <option value="gecko_asc">gecko asc</option>
     </select>
    </label>
  )
}

export default Sort