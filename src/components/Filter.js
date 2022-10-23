import React from 'react'
import Search from './Search'
import Currency from './Currency'
import Sort from './Sort'

function Filter() {
  return (
    <div className='w-full h-12 border-2 border-[#808080] rounded-lg flex items-center justify-between relative'>
        <Search/>
        <Currency />
        <Sort />
    </div>
  )
}

export default Filter