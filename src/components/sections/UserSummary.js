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
            title={"Total Days"}
            noBox={true}
            stats={562}
            icon={
              <i
                className="far fa-calendar-alt fa-2x"
                style={{ color: "#000" }}
              />
            }
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Message Exchanged"}
            noBox={true}
            stats={35985}
            icon={
              <i className="far fa-comments fa-2x" style={{ color: "#000" }} />
            }
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            noBox={true}
            title={"Total Words Sent"}
            stats={168265}
            icon={
              <i
                className="fas fa-paper-plane fa-2x"
                style={{ color: "#000" }}
              />
            }
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Letters Used"}
            noBox={true}
            stats={697235}
            icon={
              <i
                className="  fas   fa-heading fa-2x "
                style={{ color: "#000" }}
              />
            }
          />
        </div>
      </div>
    </Section>
  );
}
