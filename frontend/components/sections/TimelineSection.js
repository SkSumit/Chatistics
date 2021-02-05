import React, { useContext } from "react";
import { FileContext } from "../../pages/index";
import Timeline from "../graphs/Timeline";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
import { faFireAlt  } from '@fortawesome/free-solid-svg-icons'
export default function TimelineSection() {
  const context = useContext(FileContext);

  // const highestValue = data.find(
  //   (o) => o.Value == Math.max(...data.map((o) => o.Value))
  // );
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
            faFireAlt  
          }
        />
      }
    />
  );
}
