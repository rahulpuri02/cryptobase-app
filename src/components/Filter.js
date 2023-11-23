import React from 'react'
import Search from './Search'
import Sort from './Sort';

import CurrencyChange from './CurrencyChange';

function Filter() {

  return (
    <div className='w-full h-full  border-2 border-[#808080] rounded-lg flex items-center justify-between relative space-x-3'>
        <Search/>
      <CurrencyChange />
       <Sort />    
    </div>
  )
}

export default Filter