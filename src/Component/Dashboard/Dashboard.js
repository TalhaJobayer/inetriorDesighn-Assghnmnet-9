import React, { useEffect, useState } from 'react';
import './Dashboard.css'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ComposedChart, Area, PieChart, Pie } from 'recharts';

const Dashboard = () => {
    const [chart,setChart]=useState([]);
    useEffect(()=>{
        fetch('ChartData.json')
        .then(res=>res.json())
        .then(data=>setChart(data))
    },[])

    return (
        <>
        <div className='chart1'>
          <BarChart width={720} height={250} data={chart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
        </div >
        <div>
        <ComposedChart width={730} height={250} data={chart}>
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="investment" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
</ComposedChart>
        </div>
        <div>
        <PieChart width={730} height={250}>
  <Pie data={chart} dataKey="value" nameKey="revenue" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={chart} dataKey="value" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
        </div>
        </>
    );
};

export default Dashboard;<h1>this is Dashboard</h1>