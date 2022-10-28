import React from 'react'
import { useEffect, useState } from "react";
function HighLowIndicator({currentPrice, high, low}) {
        const[green, setGreen] = useState();
      
        useEffect(() => {
          let totalValue = high - low;
          let greenZone = ((high - currentPrice)*100)/totalValue;
          setGreen(Math.ceil(greenZone))
        }, [currentPrice, high, low])
        return (
          <>
          <span className='bg-red h-1.5 rounded-l-lg w-[50%]' style={{width: `${100 - green}%`}} >&nbsp;</span>
          <span className='bg-green h-1.5 rounded-r-lg w-[50%]'style={{width: `${green}%`}} >&nbsp;</span>
          </>
         )
      }
      


export default HighLowIndicator