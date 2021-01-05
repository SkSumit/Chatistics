import React from "react";

export default function StatsBox({ title, stats }) {
  return (
    <div className="tile box is-child">
      <p className="subtitle is-6">{title}</p>

      <p className="title is-3 py-5">{stats}</p>
    </div>
  );
}
