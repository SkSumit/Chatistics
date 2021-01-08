import React from "react";
import Timeline from "./Timeline";
import StatsBox from "./StatsBox";

export default function TimelineSection({ data }) {
  const highestValue = data.find(
    (o) => o.Value == Math.max(...data.map((o) => o.Value))
  );
  return (
    <section className="hero  ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <Timeline data={data} />
            </div>
            <div className="column is-2">
              <div className={`tile bg-light-green box is-child`}>
                <i
                  className="fas fa-fire-alt fa-2x"
                  style={{ color: " #e25822 " }}
                />

                <p className="title is-3 py-5">{highestValue.Date}</p>
                <p className="subtitle is-6">
                  Most Active Day With{" "}
                  <span className="has-text-weight-bold">
                    {highestValue.Value}
                  </span>
                  Text Exchanged
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
