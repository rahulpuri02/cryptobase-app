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
    <label className="w-full relative flex justify-center items-center  md:my-3 md:mr-3 mb-3">
    <span className="mr-2">Sort:</span>
    <select
      name="sortby"
      className="w-[85%] md:w-full rounded bg-gray-200 text-base 
   pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0
   "
      onClick={handleSort}
    >

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