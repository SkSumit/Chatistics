import React from "react";
import StatsBox from "../StatsBox";
import Section from "../common/Section";
export default function Summary({ file }) {
  return (
    <Section>
      <h1 className="subtitle is-3 ">
        Showing <span className="underline"> example </span>  Chat Between <span className="underline"> {file.user1} </span>{" "}
        {" & "}
        <span className="underline">{file.user2}</span>
      </h1>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <StatsBox
            title={"Total Days"}
            stats={file.stats.summary.total_days}
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
            stats={35985}
            icon={
              <i className="far fa-comments fa-2x" style={{ color: "#000" }} />
            }
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
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
