import React from 'react'
import { useNavigate } from 'react-router-dom';

function TrendingCoin({data}) {

    let navigate = useNavigate();
   
    const getCoinDetails = (id) => {
        navigate(`${id}`);
      };

  return (
    <div  onClick={() => getCoinDetails(data.id)}  className= 'mx-auto lg:mx-8 w-[80%] md:w-[70%]  lg:w-[80%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40'>
        {
            data ? 
            <>
            <h3 className='text-sm md:text-base flex items-center my-0.5'>
                <span className='text-gray-100'>Name: &nbsp; </span>
                <span  className='text-sm md:text-base'>{data.name}</span>
                <img className='w-5 h-5 md:w-6 md:h-6 mx-1 rounded-full' src={data.small} alt={data.name} />
            </h3>
                <h3 className='text-sm md:text-base flex items-center my-0.5'>
                <span className='text-gray-100'>Market Cap Rank: &nbsp; </span>
                <span  className='text-sm md:text-base' >{data.market_cap_rank}</span>   
            </h3>
                <h3 className='text-sm md:text-base flex items-center my-0.5'>
                <span className='text-gray-100'>Price (in btc): &nbsp; </span>
                <span  className='text-sm md:text-base'>
                     {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "btc",
                      maximumFractionDigits: 5,
                    }).format(data.price_btc)}
                    </span>   
                </h3>
                <h3 className='text-sm md:text-base flex items-center my-0.5'>
                <span className='text-gray-100'>Score: &nbsp;</span>
                <span  className='text-sm md:text-base' >{data.score}</span> 
                <img className=' absolute top-3 right-2  w-[18%] h-auto rounded-full' src={data.large} alt={data.name} />  
            </h3>
            </>

            : <div className='w-full h-full flex justify-center items-center'>
            <div className='w-8 h-8 border-4 border-blue rounded-full border-b-gray-200 animate-spin' role="status"/>
            <span className='ml-2'>Please wait...</span>   
          </div>
        }
        </div>
  )
}

export default TrendingCoin