import React from 'react'
import Filter from '../components/Filter'
import TableComponent from '../components/TableComponent'

const CoinPage = () => {
  return (
    <section className='w-[80%] h-full flex flex-col mt-16 mb-24 relative'>
        <Filter />
        <TableComponent />
    </section>
  )
}

export default CoinPage