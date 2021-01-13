import React from "react";
import Timeline from "../graphs/Timeline";
import StatsBox from "../StatsBox";
import Section from "../common/Section";
export default function TimelineSection({ data }) {
  const highestValue = data.find(
    (o) => o.Value == Math.max(...data.map((o) => o.Value))
  );
  return (
    <Section>
      <div className="columns is-vcentered  {highestValue.Value} Text Exchanged">
        <div className="column is-8">
          <Timeline data={data} />
        </div>
        <div className="column is-4">
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
        </div>
      </div>
    </Section>
  );
}
