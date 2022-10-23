import React from 'react'

function TableComponent() {
  return (
    <div
    className='flex flex-col mt-9 border border-[#808080]'>
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
                <tr className='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
                <td className='py-4'>Assets</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Total Volume</td>
                    <td>Mkt Cap Change</td>
                    <td>1H</td>
                    <td>24HR</td>
                    <td>7D</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableComponent