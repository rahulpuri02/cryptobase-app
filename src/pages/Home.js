import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <main className='w-full h-full flex flex-col first-letter:content-center items-center
        relative text-black font-nunito'>
        <div className='w-screen h-screen bg-gray-100 fixed -z-10' />
    
        <Outlet/>
    </main>
  )
}

export default Home