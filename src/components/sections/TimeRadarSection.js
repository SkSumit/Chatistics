import React, { useContext, useState } from "react";
import { FileContext } from "../../App";
import TimeRadarChart from "../graphs/TimeRadarChart";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
export default function TimeRadarSection() {
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "All",
  });

  return (
    <Layout
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Hourwise breakdown, so you{" "}
          <span className="underline">sleep early</span>
        </h1>
      }
      graph={<TimeRadarChart />}
      rightColumnContent={
        <>
          <StatsBox
            title={"Average Texts Per Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .averageTexts
            }
            icon={
              <i
                className="fas fa-comment-dots fa-2x"
                style={{ color: "#000" }}
              />
            }
          />
          <StatsBox
            title={"Most Texted Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .mostActiveDay
            }
            icon={
              <i
                className="fas fa-calendar-week fa-2x"
                style={{ color: "#000" }}
              />
            }
          />
          <StatsBox
            title={"Most Frequently texted Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .mostFrequentDay
            }
            icon={
              <i
                className="fas fa-angle-double-up fa-2x"
                style={{ color: "#000" }}
              />
            }
          />
        </>
      }
    />
  );
}
