import React, { useContext, useState } from "react";
import { FileContext } from "../../pages/index";
import TimeRadarChart from "../graphs/TimeRadarChart";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
import {
  faCommentDots,
  faCalendarWeek,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

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
            icon={faCommentDots}
          />
          <StatsBox
            title={"Most Texted Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .mostActiveDay
            }
            icon={faCalendarWeek}
          />
          <StatsBox
            title={"Most Frequently texted Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .mostFrequentDay
            }
            icon={faAngleDoubleUp}
          />
        </>
      }
    />
  );
}
