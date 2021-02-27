import React, { useContext } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FileContext } from "../../pages/index";

export default function TimeRadarChart({ selectedOption }) {
  const context = useContext(FileContext);
  const timeFormat = ({ time }) => {
    return time >= 12
      ? `${time - 12 === 0 ? "12" : time - 12} pm`
      : `${time === 0 ? "12" : time} am`;
  };
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart
        data={
          context.file.stats.radarMap[selectedOption.username].radarmapUsage
        }
      >
        <PolarGrid />
        <PolarAngleAxis dataKey={timeFormat} />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          name="Texts"
          dataKey="count"
          fill="#25d366"
          fillOpacity={0.6}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
