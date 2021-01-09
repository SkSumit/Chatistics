import React, { useContext } from "react";
import { FileContext } from "../../App";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DayBar() {
  const context = useContext(FileContext);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width="100%"
        height={400}
        data={context.stats.analysis.basedOnDays.days}
        layout="vertical"
      >
        <XAxis type="number" />
        <YAxis dataKey="day" height={"100%"} width={85} type="category" />
        <Tooltip />
        <Bar dataKey="value" fill="#25d366" />
      </BarChart>
    </ResponsiveContainer>
  );
}
