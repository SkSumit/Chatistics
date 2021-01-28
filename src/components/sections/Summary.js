import React from "react";
import StatsBox from "../StatsBox";
import Section from "../common/Section";
import {
  faCalendarAlt,
  faComments,
  faPaperPlane,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
export default function Summary({ file }) {
  return (
    <Section>
      <h1 className="title is-3 ">Lazy? Here's how we'd show your stats,</h1>
      <h3 className="subtitle is-5 ">
        showing{" "}
        <span className="has-text-weight-semibold bg-light-green px-1">
          {" "}
          example{" "}
        </span>{" "}
        chat between <span className="underline"> {file.user1} </span> {" & "}
        <span className="underline">{file.user2}</span>
      </h3>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <StatsBox
            title={"Total Days"}
            stats={file.stats.summary.total_days}
            icon={faCalendarAlt}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Message Exchanged"}
            stats={35985}
            icon={faComments}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Words Sent"}
            stats={168265}
            icon={faPaperPlane}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Letters Used"}
            stats={697235}
            icon={faHeading}
          />
        </div>
      </div>
    </Section>
  );
}
