
import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import {ImStarEmpty} from 'react-icons/im'
import { Sparklines, SparklinesLine } from 'react-sparklines';

function TableComponent() {

     let {cryptoData} = useContext(CryptoContext);

   //console.log(cryptoData);
  return (
    <div
    className='flex flex-col mt-9 border border-[#808080] rounded-lg'>
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
                <th className="py-1">1h</th>
                <th className="py-1">24h</th>
                <th className="py-1 lg:table-cell hidden">7d</th>
                <th className="py-1 lg:table-cell hidden">Mkt Cap</th>
                <th className="py-1 lg:table-cell hidden">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
      {cryptoData.map((coin) => {
            return (
                <tr key={coin.id} className='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
                <td className='py-4 flex items-center uppercase'>
                  <button className='cursor-pointer'><ImStarEmpty className='w-5 h-5 ml-[5px]'/></button>
                  <img className='w-6 h-6 mx-3' src={coin?.image} alt={coin.name}/>
                  <span>{coin.symbol}</span>
                </td>
                    <td className='py-4'>{coin.name}</td>
                    <td className='py-4'>{new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "usd"
                    }).format(coin.current_price)}</td>
                    <td className={
                      coin.price_change_percentage_1h_in_currency > 0 ? 'text-green py-4' : 'text-red py-4'
                    }>{Number(coin.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                    <td className={
                      coin.price_change_percentage_24h_in_currency > 0 ? 'text-green py-4' : 'text-red py-4'
                    }>{Number(coin.price_change_percentage_24h_in_currency).toFixed(2)}%</td>
                  <td className={
                      coin.price_change_percentage_7d_in_currency > 0 ? 'text-green py-4' : 'text-red py-4'
                    }>{Number(coin.price_change_percentage_7d_in_currency).toFixed(2)}%</td>  
                    <td className='py-4'>${coin.market_cap.toLocaleString()}</td>
                    <td className='py-4 cursor-pointer'><Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal"/>
       </Sparklines></td>    
                </tr>
            );
        })}
            </tbody>
        </table> : null
        }
        
    </div>
  )
}

export default TableComponent