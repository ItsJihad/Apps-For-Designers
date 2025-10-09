import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";



function Chart({ ratings }) {
  return (
    <div>
      <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={ratings} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Chart
