import React, { useState, useEffect } from "react";
import BarChart from "./Charts/BarChart";
import axios from "axios";

export default function Dashboard() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res.data);
        setValues(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const [values,setValues] = useState([]);
  const [userData, setUserData] = useState({
    labels: values.map((data) => data['likelihood']),
    datasets: [
      {
        label: "Users Gained",
        data: values.map((data) => data['likelihood']),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      Dashboard
      <BarChart chartData={userData} />
    </div>
  );
}
