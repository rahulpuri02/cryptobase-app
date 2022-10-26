import React, { useContext, useEffect } from 'react'
import  ReactDOM  from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { CryptoContext } from '../context/CryptoContext';

const CoinDetails = () => {

    let {coinId} = useParams();
    let navigate = useNavigate();
    let {coinData, getCoinData} = useContext(CryptoContext);
     
    useEffect(() => {
    getCoinData(coinId)
    },[coinId])

    const close = () => {
        navigate("..")
    }

  return ReactDOM.createPortal(
    <div className='fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter:first-line:
    backdrop-blur-sm flex items-center justify-center'
    onClick={close}>
        <div onClick={(e) => e.stopPropagation()} className='w-[65%] h-[75%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative'>
        {
            coinData ? <div className='flex items-center justify-between h-full w-full p-4 '>
           
           {/*Left Side */}

             <div className='flex flex-col w-[45%] h-full pr-2 bg-red'>
              left
             </div>

             {/*Right Side */}

             <div className='flex flex-col w-[55%] h-full pl-4 bg-green'>
             right
             </div>

            </div> 
            : null
        }
        </div>
    </div>,
    document.getElementById("model")
  )
}

export default CoinDetails