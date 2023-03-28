import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    uv: 6,
    fill: "#D1D2D2",
  },
  {
    uv: 5,
    // pv: 4567,
    fill: "#87D769",
  },
  {
    uv: 5,
    fill: "#FF993A",
  },
  {
    uv: 5,
    fill: "#7397F5",
  },
];

const style = {
  top: 0,
  left: 390,
  lineHeight: "24px",
};

export default function App() {
  return (
    <ResponsiveContainer width={300} height={300}>
      <RadialBarChart
        // cx={150}
        // cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          // minAngle={15}
          // label={{ position: "outsideStart", fill: "#fff" }}
          // background
          // clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={0}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
