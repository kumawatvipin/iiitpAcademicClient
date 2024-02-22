import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { PieChart, Pie } from "recharts";
function Chart() {
  const data = [
    {
      name: "<20%",
      SecA: 20,
      SecB: 15,
      amt: 20,
    },
    {
      name: "(20-40)%",
      SecA: 20,
      SecB: 18,
      amt: 20,
    },
    {
      name: "(40-60)%",
      SecA: 50,
      SecB: 40,
      amt: 20,
    },
    {
      name: "(60-75)%",
      SecA: 30,
      SecB: 40,
      amt: 20,
    },
    {
      name: ">75%",
      SecA: 50,
      SecB: 55,
      amt: 20,
    },
  ];
  const secAData = [
    { name: "<20%", value: 20 },
    { name: "(20-40)%", value: 30 },
    { name: "(40-60)%", value: 50 },
    { name: "(60-75)%", value: 30 },
    { name: ">75%", value: 50 },
    
  ];
  const secBData = [
    { name: "<20%", value: 15 },
    { name: "(20-40)%", value: 18 },
    { name: "(40-60)%", value: 40 },
    { name: "(60-75)%", value: 40 },
    { name: ">75%", value: 55 },
    
  ];
  
  return (
    <div>
      {/* vipin */}
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend fontSize={""} />
        <Bar
          dataKey="SecB"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="SecA"
          // fill="#"
          fill="gold"
          activeBar={<Rectangle fill="#82ca9d" stroke="purple" />}
        />
      </BarChart>

      <PieChart width={1000} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={secBData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          data={secAData}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="gold"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Chart;
