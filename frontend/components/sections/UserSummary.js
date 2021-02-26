import React, { useContext } from "react";
import { FileContext } from "../../pages/index";
import Section from "../common/Section";
import StatsBox from "../StatsBox";
import {
  faUsers,
  faMedal,
  faPoo,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function UserSummary() {
  const context = useContext(FileContext);
  return (
    <Section containerVariant={"bg-light-green"}>
      <h1 className="subtitle is-3 ">
        Let's get into <span className="underline">personal stats</span> now
      </h1>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <StatsBox title={"Total Users in Chats"} stats={context.file.stats.summary.totalUsers} icon={faUsers} />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Most Texts Sent"}
            stats={context.file.stats.summary.mostTexts}
            icon={faMedal}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox title={"Least Texts Sent"} stats={context.file.stats.summary.leastTexts} icon={faPoo} />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"STATS TBD"}
            stats={"STATS TBD"}
            icon={faFireAlt}
          />
        </div>
      </div>
    </Section>
  );
}
