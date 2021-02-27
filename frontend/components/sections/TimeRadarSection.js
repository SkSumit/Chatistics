import React, { useContext, useState } from "react";
import { FileContext } from "../../pages/index";
import TimeRadarChart from "../graphs/TimeRadarChart";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
import {
  faCommentDots,
 
  faHourglass,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";



export default function TimeRadarSection() {
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
          Hourwise breakdown, so you{" "}
          <span className="underline">sleep early</span>
        </h1>
      }
      graph={
        <TimeRadarChart
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      }
      rightColumnContent={
        <>
          <StatsBox
            title={"Average Texts Per Hour"}
            stats={context.file.stats.radarMap[
              selectedOption.username
            ].radarmapStat.averageTextsPerHour.toFixed(2)}
            icon={faCommentDots}
          />
          <StatsBox
            title={"Most Active Hour"}
            stats={
              context.file.stats.radarMap[selectedOption.username].radarmapStat
                .mostActiveHour
            }
            icon={faHourglass}
          />
          <StatsBox
            title={"Least Active Hour"}
            stats={
              context.file.stats.radarMap[selectedOption.username].radarmapStat
                .leastActiveHour
            }
            icon={  faHourglassHalf}
          />
        </>
      }
    />
  );
}
