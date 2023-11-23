import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import TrendingCoin from '../components/TrendingCoin';
import { TrendingContext } from '../context/TrendingContext'

const Trending = () => {

  const {trendingData} = useContext(TrendingContext);
 
  return (
    <section className='w-[80%] h-full flex mt-5 mb-24 relative'>
       <div
        className='w-full min-h-[60vh] py-8 grid grid-cols-1 lg:grid-cols-2 mt-9 border border-[#808080] rounded-lg'>
        {
          trendingData && trendingData.map(coin => 
          <TrendingCoin key={coin.id} data={coin.item} /> 
          )
        }
        </div>
       <Outlet />
      </section>
  )
}

export default Trending