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
    <label className='relative flex justify-center items-center'>
    <span className='font-bold mr-3'>Sort By: </span>
     <select onClick={handleSort} className='rounded bg-gray-200 text-base pl-2 pr-8 py-0.5 leading-4 capitalize outline-0 focus:border' name="sortby" >
       {/*market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, id_asc, id_desc */}
       <option value="market_cap_desc">market cap desc</option>
       <option value="market_cap_asc">market cap asc</option>
       <option value="id_desc">id desc</option>
       <option value="id_asc">id asc</option>
       <option value="gecko_desc">gecko desc</option>
       <option value="gecko_asc">gecko asc</option>
     </select>
    </label>
  )
}

export default Sort