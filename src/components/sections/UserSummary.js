import React from "react";
import Section from "../common/Section";
import StatsBox from "../StatsBox";
export default function UserSummary() {
  return (
    <Section containerVariant={"bg-light-green"}>
      <h1 className="subtitle is-3 ">
        Let's get into <span className="underline">personal stats</span> now
      </h1>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <StatsBox
            title={"Total Users in Chats"}
            noBox={true}
            stats={3}
            icon={
              <i className="fas fa-users fa-2x" style={{ color: "#000" }} />
            }
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Most Texts Sent"}
            noBox={true}
            stats={"Atharva"}
            icon={
              <i className="fas fa-medal fa-2x" style={{ color: "#000" }} />
            }
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            noBox={true}
            title={"Least Texts Sent"}
            stats={"Yash"}
            icon={<i className="fas fa-poo fa-2x" style={{ color: "#000" }} />}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Highest Streak"}
            noBox={true}
            stats={"19 Days"}
            icon={
              <i
                className="  fas   fa-fire-alt fa-2x "
                style={{ color: "#000" }}
              />
            }
          />
        </div>
      </div>
    </Section>
  );
}
