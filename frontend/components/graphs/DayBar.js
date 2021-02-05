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

  // const options = Object.keys(context.file.stats.analysis.basedOnDays).map(
  //   (item) => ({
  //     label: item.charAt(0).toUpperCase() + item.slice(1),
  //     value: item,
  //   })
  // );

  return (
    <>
      {/* <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable={true}
        styles={customStyles}
        id={1}
      /> */}

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          height={400}
          data={
            context.file.stats.analysis.basedOnDays[selectedOption.username]
          }
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
