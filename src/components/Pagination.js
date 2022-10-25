import React, { useState } from 'react'
import paginationArrow from "../assets/pagination-arrow.svg";

function Pagination() {

    const[currentPage, setCurrentPage] = useState(1);
    
    let TotalNumber = 1350;

    const nextPage = () => {
    if(currentPage === TotalNumber){
        return null;
    }else {
        setCurrentPage(currentPage + 1);
    }
    }

    const prevPage = () => {
        if(currentPage === 1){
            return null;
        }else {
            setCurrentPage(currentPage - 1);
        }
        }

   const multiStepNext = () =>{
    if(currentPage+3 >= TotalNumber){
        setCurrentPage(TotalNumber - 1)
    }else{
        setCurrentPage(currentPage + 3)
    }
   }

   const multiStepPrev = () =>{
    if(currentPage - 3 <= 1){
        setCurrentPage(TotalNumber + 1)
    }else{
        setCurrentPage(currentPage - 2)
    }
   }


  return (
    <div className='flex items-center'>
        <ul className='flex items-center justify-end text-sm'>
        <li className='flex items-center'>
            <button  onClick={prevPage} className='outline-0 hover:w-8'>
        <img className='w-full h-auto rotate-180' src={paginationArrow} alt="arrow-right" /> 
        </button></li>
        <li><button onClick={multiStepPrev} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center text-lg'>...</button></li>
        <li><button className='outline-0 rounded-full w-9 h-9 flex items-center justify-center bg-gray-200 mx-1.5'>{currentPage - 1 }</button></li>
        <li><button className='outline-0 rounded-full w-9 h-9 flex items-center justify-center text-gray-300 bg-blue mx-1.5'>{currentPage }</button></li>

       {
        (currentPage +1 !== TotalNumber && currentPage !== TotalNumber) ? 
        <li ><button className='outline-0 rounded-full w-9 h-9 flex items-center justify-center bg-gray-200 mx-1.5'>{currentPage + 1 }</button></li> : null
       }
       {
        currentPage +1 !== TotalNumber && currentPage !== TotalNumber ?  <li><button onClick={multiStepNext} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center text-lg'>...</button></li> : null
       }
       {
        currentPage !== TotalNumber ? <li ><button onClick={() => setCurrentPage(TotalNumber)} className='outline-0 rounded-full w-9 h-9 flex items-center justify-center bg-gray-200 mx-1.5'>{TotalNumber}</button></li> : null
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