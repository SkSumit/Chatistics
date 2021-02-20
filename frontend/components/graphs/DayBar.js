import React, { useContext } from "react";
import { FileContext } from "../../pages/index";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DayBar({ selectedOption, setSelectedOption }) {
  const context = useContext(FileContext);

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          height={400}
          data={context.file.stats.basedOnDays[selectedOption.username][0]}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="DAY" width={85} type="category" />
          <Tooltip />
          <Bar
            name="Texts"
            dataKey="MESSAGE"
            fill="#25d366"
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
