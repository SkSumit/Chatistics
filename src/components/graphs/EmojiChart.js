import React, { useContext } from "react";
import randomColor from 'randomcolor'
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FileContext } from "../../App";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  Emoji,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {percent * 100 >= 3 ? `${Emoji}  ${(percent * 100).toFixed(0)}%` : ""}
    </text>
  );
};
const CustomTooltip = ({ payload, percent }) => {
  return (

      <div className={"notification is-primary "}>
        <p className="desc">
          <small>
            {payload?.[0]?.payload?.Emoji} was used <br />{" "}
            {payload?.[0]?.payload?.No_Of_Emoji} times
          </small>
        </p>
      </div>
 
  );
};
export default function EmojiChart() {
  const context = useContext(FileContext);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          data={context.file.stats.emoji}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="No_Of_Emoji"
        >
          {context.file.stats.emoji.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={randomColor()}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}
