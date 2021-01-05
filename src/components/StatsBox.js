import React from "react";

export default function StatsBox({ title, stats }) {
  return (
    <div className="tile box is-child">
     
        <p className="subtitle is-6">{title}</p>
     
   
      <p className="title is-3 py-5">{stats}</p>
   
    </div>
  );
}

{/* <div className="tile box is-child">
<div className="card-header">
  <p className="subtitle is-5">{title}</p>
</div>
<footer className="card-footer">
  <p className="card-footer-item subtitle"> <p className="title is-3">{stats}</p></p>
</footer>
</div> */}