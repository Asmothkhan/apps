import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Tooltip, CartesianGrid } from 'recharts';



const RatingBarChart = ({ app }) => {
  const ratings = Array.isArray(app?.ratings) ? app.ratings : [];

  const chartData =(Array.isArray(ratings) ? ratings : []).map(rate => ({
    name: rate.name,
    count: rate.count
  }));

  return (
    <div>
      <BarChart layout="vertical" width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />

        <Bar 
          dataKey="count" 
          fill="yellow" 
          barSize={20} 
        />
      </BarChart>
    </div>
  );
};
export default RatingBarChart;