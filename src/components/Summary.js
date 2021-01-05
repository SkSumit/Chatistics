import React from "react";
import StatsBox from "./StatsBox";

export default function Summary({ file }) {
  return (
    <section className="hero ">
      <div className="hero-body">
        {file && (
          <div className="container ">
            <h1 className="subtitle is-3 ">
              Showing Chat Between{" "}
              <span className="underline"> {file.user1} </span> {" & "}
              <span className="underline">{file.user2}</span>
            </h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <StatsBox
                  title={"Total Days"}
                  stats={file.stats.summary.total_days}
                />
              </div>
              <div className="tile is-parent">
                <StatsBox title={"Total Message Exchanged"} stats={35985} />
              </div>
              <div className="tile is-parent">
                <StatsBox title={"Total Words Sent"} stats={168265} />
              </div>
              <div className="tile is-parent">
                <StatsBox title={"Total Letters Used"} stats={697235} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
