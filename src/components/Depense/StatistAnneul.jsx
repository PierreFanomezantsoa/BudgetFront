import React from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from 'recharts';
  
  const data = [
    {
      name: 'Janvier',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Fevrier',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Mars',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Avril',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Mai',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Juin',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
        name: 'Juillet',
        uv: 1200,
        pv: 780,
        amt: 1700,
      },
      {
        name: 'Aout',
        uv: 1200,
        pv: 800,
        amt: 1700,
      },
  ];

function StatistAnneul() {
  return (
    < div className='grid md:grid-cols-1 grid-cols-1 gap-[30px] mt-[15px] pb-[15px]'>
        <div className='flex flex-wrap w-[70%] md:w-[100%]'>
            <ComposedChart
            width={500}
            height={340}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>

        </div>
    </div>
  )
}

export default StatistAnneul
