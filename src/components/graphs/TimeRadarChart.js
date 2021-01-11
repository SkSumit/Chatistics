import React, { useContext, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FileContext } from "../../App";

export default function TimeRadarChart() {
  const context = useContext(FileContext);

  return (
    <ResponsiveContainer width="100%" height={550}>
      <RadarChart
        width={"50%"}
        height={100}
        data={context.file.stats.analysis.basedOnTime.all.time}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="day" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar name="Texts" dataKey="value" fill="#25d366" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
