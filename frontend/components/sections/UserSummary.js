import React from "react";
import Section from "../common/Section";
import StatsBox from "../StatsBox";
import {
  faUsers,
  faMedal,
  faPoo,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function UserSummary() {
  return (
    <Section containerVariant={"bg-light-green"}>
      <h1 className="subtitle is-3 ">
        Let's get into <span className="underline">personal stats</span> now
      </h1>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <StatsBox title={"Total Users in Chats"} stats={3} icon={faUsers} />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Most Texts Sent"}
            stats={"Atharva"}
            icon={faMedal}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox title={"Least Texts Sent"} stats={"Yash"} icon={faPoo} />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Highest Streak"}
            stats={"19 Days"}
            icon={faFireAlt}
          />
        </div>
      </div>
    </Section>
  );
}
