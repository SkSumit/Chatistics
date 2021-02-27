import React, { useContext,useState } from "react";
import { FileContext } from "../../pages/index";
import Timeline from "../graphs/Timeline";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
import { faFireAlt  } from '@fortawesome/free-solid-svg-icons'
export default function TimelineSection() {
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    username: "All",
  });

  return (
    <Layout
    selectedOption={selectedOption}
    setSelectedOption={setSelectedOption}
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Who doesn't like a <span className="underline">timeline?</span>
        </h1>
      }
      graph={<Timeline selectedOption={selectedOption}
      />}
      rightColumnContent={
        <StatsBox
          title={`Most Active Day With  ${context.file.stats.timeline[selectedOption.username].timelineStat.value}  Texts Exchanged`}
          stats={context.file.stats.timeline[selectedOption.username].timelineStat.mostActiveDate}
          icon={
            faFireAlt  
          }
        />
      }
    />
  );
}
