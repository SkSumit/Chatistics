import React, { useContext } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FileContext } from "../../pages/index";

export default function Timeline() {
  const context = useContext(FileContext);
 
  const dateFormat = (date)=>new Date(date.date).toLocaleDateString('en-GB')
  return (
    <ResponsiveContainer width="100%" height={400} >
      <BarChart width="100%" height={400} data={context.file.stats.timeline}>
        <Bar dataKey="count" fill="#25d366" legendType={"line"} isAnimationActive={false}/>
        <XAxis dataKey={dateFormat} />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}
