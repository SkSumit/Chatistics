import React from "react";
import {
  AreaChart,
  BarChart,
  Bar,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Timeline({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart width="100%" height={400} data={data}>
        <Bar dataKey="Value" fill="#25d366" legendType={"line"} />
        <XAxis dataKey="Date" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}
