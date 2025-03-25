import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];

  // const categories = [];
  const counts = {};

  storedCategories.map((category)=>{
    counts[category]=0 })

  storedProducts.map((product)=>{
    counts[product.category]++
  })

  const chartData = storedCategories.map((index) => {
    return{
      id: index,
      value: counts[index],
      label: index
    }
  });


  return <PieChart series={[{ data: chartData }]} width={400} height={200} />;
}
