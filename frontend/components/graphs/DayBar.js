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

export default function DayBar({ selectedOption}) {
  const context = useContext(FileContext);
  const days = sortedDays(context.file.stats.basedOnDays[selectedOption.username][0])
  return (
    <>
      <ResponsiveContainer  height={400}>
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




const sortedDays = (days) =>{
  const sorter = {
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
  }
  days.sort(function sortByDay(a, b) {
    let day1 = a.DAY.toLowerCase();
    let day2 = b.DAY.toLowerCase();
    return sorter[day1] - sorter[day2];
  })
}