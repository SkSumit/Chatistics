import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StatsBox({
  title,
  stats,
  icon,
  bgClass = "bg-light-green",
  noBox = false,
}) {
  return (
    <div className={`tile ${bgClass} ${noBox ? " " : "box"}  is-child`}>
      <FontAwesomeIcon icon={icon} size='2x' className="has-text-black"/>
      <p className="title is-3 py-5 has-text-black" >
        {stats} 
      </p>
      <p className="subtitle is-6 has-text-black" >
        {title}
      </p>
    </div>
  );
}
