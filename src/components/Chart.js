import React, { useLayoutEffect, useState } from 'react'
import { LineChart, Line, YAxis, XAxis } from 'recharts';


const ChartComponent = ({data}) => {
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="prices" stroke="#0d6eff" strokeWidth={"1px"} />
      <XAxis dataKey="date" />
    <YAxis />
    </LineChart>
  );
}

const Chart = ({ id }) => {
    const [chartData, setChartData] = useState();

    useLayoutEffect(() => {
      const getChartData = async (id) => {
        try {
          const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
          )
            .then((res) => res.json())
     
          console.log("chart-data", data);

          let convertData = data.prices.map(item => 
           { return {
              data: new Date(item[0]).toLocaleDateString(),
              prices: item[1],
            }
          }
          )
          console.log("new Data-", convertData);

          setChartData(convertData);
        } catch (error) {
          console.log(error);
        }
      };
  
      getChartData(id);
    }, [id]);
  
  return (
   <div><ChartComponent data={chartData}/> </div>
  )
}

export default Chart