import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Marketing', A: 120, fullMark: 150 },
  { subject: 'Sales', A: 98, fullMark: 150 },
  { subject: 'Finance', A: 86, fullMark: 150 },
  { subject: 'Operations', A: 99, fullMark: 150 },
  { subject: 'Support', A: 85, fullMark: 150 },
];

const RadarChartDemo = () => (
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Performance" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

export default RadarChartDemo;
