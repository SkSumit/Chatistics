import React from "react";

export default function StatsBox({ title, stats, icon,bgClass = 'bg-light-green' }) {
  return (
    <div className={`tile ${bgClass} box is-child`}>
      {icon}
      <p className="title is-3 py-5">{stats}</p>
      <p className="subtitle is-6">{title}</p>
    </div>
  );
}

