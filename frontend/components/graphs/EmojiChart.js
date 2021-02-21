import React, { useContext } from "react";
import randomColor from "randomcolor";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { FileContext } from "../../pages/index";
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,

  emoji,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {percent * 100 >= 3 ? `${emoji}  ${(percent * 100).toFixed(0)}%` : ""}
    </text>
  );
};
const CustomTooltip = ({ payload }) => {
  return (
    <div className={"notification is-primary "}>
      <p>
        <small>
          {payload?.[0]?.payload?.emoji} was used <br />
          {payload?.[0]?.payload?.value} times
        </small>
      </p>
    </div>
  );
};
export default function EmojiChart({ selectedOption, setSelectedOption }) {
  const context = useContext(FileContext);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          isAnimationActive={false}
          data={context.file.stats.emoji[selectedOption.username].emojiUsage}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {context.file.stats.emoji[selectedOption.username].emojiUsage.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={randomColor()} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}
