import React, { useContext } from 'react'
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from '../context/CryptoContext';

function Pagination() {
    

   let {page, setPage} = useContext(CryptoContext);
   
   const TotalNumber = 1220

    const nextPage = () => {
    if(page === TotalNumber){
        return null;
    }else {
        setPage(page + 1);
    }
    }

    const prevPage = () => {
        if(page === 1){
            return null;
        }else {
            setPage(page - 1);
        }
        }

   const multiStepNext = () =>{
    if(page+3 >= TotalNumber){
        setPage(TotalNumber - 1)
    }else{
        setPage(page + 3)
    }
   }

   const multiStepPrev = () =>{
    if(page - 3 <= 1){
        setPage(TotalNumber + 1)
    }else{
        setPage(page - 2)
    }
   }


  return ( 
  
    <div className= "flex items-center">
    <ul className='flex items-center justify-end text-sm'>
   <li className='flex items-center'>
    <button  onClick={prevPage} className='outline-0 hover:w-8'>
<img className='w-full h-auto rotate-180' src={paginationArrow} alt="arrow-right" /> 
 </button></li> 
 {
    (page + 1 === TotalNumber || page === TotalNumber) ? <li><button onClick={multiStepPrev} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center text-lg'>...</button></li> : null
 } 
  {
     (page -1 !== 0) ? <li><button onClick={prevPage} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center bg-gray-200 mx-1.5'>{page - 1 }</button></li>: null
    }
    <li><button className='outline-0 rounded-full w-9 h-9 flex items-center justify-center text-gray-300 bg-blue mx-1.5'>{page }</button></li>

   {
    (page +1 !== TotalNumber && page !== TotalNumber) ? 
    <li ><button onClick={nextPage} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center bg-gray-200 mx-1.5'>{page + 1 }</button></li> : null
   }
   {
    page +1 !== TotalNumber && page !== TotalNumber ?  <li><button onClick={multiStepNext} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center text-lg'>...</button></li> : null
   }
   {
    page !== TotalNumber ? <li ><button onClick={() => setPage(TotalNumber)} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center bg-gray-200 mx-1.5'>{TotalNumber}</button></li> : null
   }
   <li>
    <button  onClick={nextPage} className='ml-1.5 flex items-center'>
    <img className='w-full h-auto ' src={paginationArrow} alt="arrow-left" /> 
    </button></li>
    </ul>
</div>
  )
}

export default Pagination