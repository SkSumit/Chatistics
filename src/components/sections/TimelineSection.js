import React from "react";
import Timeline from "../graphs/Timeline";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
export default function TimelineSection({ data }) {
  const highestValue = data.find(
    (o) => o.Value == Math.max(...data.map((o) => o.Value))
  );
  return (
    <Layout
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Who doesn't like a <span className="underline">timeline?</span>
        </h1>
      }
      graph={<Timeline data={data} />}
      rightColumnContent={
        <StatsBox
          title={`Most Active Day With  ${highestValue.Value}  Text Exchanged`}
          stats={highestValue.Date}
          icon={
            <i
              className="fas fa-fire-alt fa-2x"
              style={{ color: " #e25822 " }}
            />
          }
        />
      }
    />
  );
}
