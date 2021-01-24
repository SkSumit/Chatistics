import React, { useContext } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FileContext } from "../../App";

export default function Timeline({ data }) {
  const context = useContext(FileContext);
  return (
    <ResponsiveContainer width="100%" height={400} >
      <BarChart width="100%" height={400} data={context.file.stats.timelineByMonth}>
        <Bar dataKey="Value" fill="#25d366" legendType={"line"} onAnimationEnd={console.log('hi')} isAnimationActive={false}/>
        <XAxis dataKey="Date" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}
