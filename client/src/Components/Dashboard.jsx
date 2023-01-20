import React, { useState, useEffect } from "react";
// import BarChart from "./Charts/BarChart";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const [data,setData] = useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  function MyBarChart({ data }) {
    return (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="source" />
        <YAxis />
        <Bar dataKey="intensity" fill="#8884d8" />
      </BarChart>
    );
  }
 
  return (
    <div>
      <MyBarChart data={data} />
    </div>
  );
}
