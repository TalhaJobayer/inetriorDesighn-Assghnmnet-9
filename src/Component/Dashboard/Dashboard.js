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
        <div>
        <div className='chart-container'>
            
        <div className='chart1'>
          <BarChart width={500} height={250} data={chart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
        </div >
        <div className='chart2'>
        <ComposedChart width={500} height={250} data={chart}>
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
        </div>
        <div>
        <LineChart width={730} height={250} data={chart}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
  <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
</LineChart>
        </div>
        
        </div>
    );
};

export default Dashboard;<h1>this is Dashboard</h1>