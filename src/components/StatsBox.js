import React from "react";

export default function StatsBox({ title, stats }) {
  return (
    <div className="tile card box is-child">
      <div className="card-header">
        <p className="card-header-title">{title}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item subtitle">{stats}</p>
      </footer>
    </div>
  );
}
