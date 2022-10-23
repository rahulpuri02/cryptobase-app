import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import {ImStarEmpty} from 'react-icons/im'
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
                <td className='py-4 flex items-center uppercase'>
                  <button className='cursor-pointer'><ImStarEmpty className='w-6 h-6 ml-[5px]'/></button>
                  <img className='w-6 h-6 mx-3' src={data?.image} alt="{data.name}" />
                  <span>{data.symbol}</span>
                </td>
                    <td className='py-4'>{data.name}</td>
                    <td className='py-4'>{new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "usd"
                    }).format(data.current_price)}</td>
                    <td className='py-4'>{data.total_volume}</td>
                    <td className='py-4'>{data.market_cap_change_percentage_24h}%</td>
                    <td className={
                      data.price_change_percentage_1h_in_currency > 0 ? 'text-green py-4' : 'text-red py-4'
                    }>{Number(data.price_change_percentage_1h_in_currency).toFixed(2)}</td>
                    <td className={
                      data.price_change_percentage_1h_in_currency > 0 ? 'text-green py-4' : 'text-red py-4'
                    }>{Number(data.price_change_percentage_24h_in_currency).toFixed(2)}</td>
                  <td className={
                      data.price_change_percentage_1h_in_currency > 0 ? 'text-green py-4' : 'text-red py-4'
                    }>{Number(data.price_change_percentage_7d_in_currency).toFixed(2)}</td>
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