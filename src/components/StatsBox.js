import React from "react";

export default function StatsBox({
  title,
  stats,
  icon,
  bgClass = "bg-light-green",
  noBox = false,
}) {
  return (
    <div className={`tile ${bgClass} ${noBox ? " " : "box"}  is-child`}>
      {icon}
      <p className="title is-3 py-5" style={{ color: "#000" }}>
        {stats}
      </p>
      <p className="subtitle is-6" style={{ color: "#000" }}>
        {title}
      </p>
    </div>
  );
}
