import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'

function TableComponent() {

     let {cryptoData} = useContext(CryptoContext);

    //console.log(test);
  return (
    <div
    className='flex flex-col mt-9 border border-[#808080]'>
        {
            cryptoData ? 
            <table className='w-full table-auto'>
        <thead
              className="capitalize text-base text-white 
            font-medium border-b border-gray-100
            "
            >
              <tr>
                <th className="py-1">asset</th>
                <th className="py-1">name</th>
                <th className="py-1">price</th>
                <th className="py-1">total volume</th>
                <th className="py-1">market cap change</th>
                <th className="py-1 lg:table-cell hidden">1H</th>
                <th className="py-1 lg:table-cell hidden">24H</th>
                <th className="py-1 lg:table-cell hidden">7D</th>
              </tr>
            </thead>
            <tbody>
      {
        cryptoData.map(data => {
            return (
                <tr key={data.id} className='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
                <td className='py-4'>Assets</td>
                    <td className='py-4'>{data.name}</td>
                    <td className='py-4'>Price</td>
                    <td className='py-4'>Total Volume</td>
                    <td className='py-4'>Mkt Cap Change</td>
                    <td className='py-4'>1H</td>
                    <td className='py-4'>24HR</td>
                    <td className='py-4'>7D</td>
                </tr>
            )
        })
      }
            </tbody>
        </table> : null
        }
        
    </div>
  )
}

export default TableComponent