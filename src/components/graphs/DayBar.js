import React, { useContext, useState } from "react";
import Select from "react-select";
import { FileContext } from "../../App";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DayBar({ selectedOption, setSelectedOption }) {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: "#dbdbdb",
      borderWidth: "1px",
      cursor: "pointer",
      justifyContent: "center",
      marginBottom: "1rem",
      width: "50%",
    }),
  };
  const context = useContext(FileContext);

  const options = Object.keys(context.file.stats.analysis.basedOnDays).map(
    (item) => ({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      value: item,
    })
  );

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable={true}
        styles={customStyles}
        id={1}
      />

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width="100%"
          height={400}
          data={
            context.file.stats.analysis.basedOnDays[selectedOption.value].days
          }
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="day" height={"100%"} width={85} type="category" />
          <Tooltip />
          <Bar name="Texts" dataKey="value" fill="#25d366" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
