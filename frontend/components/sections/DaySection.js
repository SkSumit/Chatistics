import React, { useContext, useState } from "react";
import { FileContext } from "../../pages/index";
import DayBar from "../graphs/DayBar";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
import {
  faCommentDots,
  faCalendarWeek,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

export default function DaySection() {
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
          Breakdown of your chats, <span className="underline">day-wise</span>
        </h1>
      }
      rightColumn={false}
      graph={
        <DayBar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      }
      rightColumnContent={
        <>
          <StatsBox
            title={"Average Texts Per Day"}
            stats={
              context.file.stats.basedOnDays[selectedOption.username][1]
                .averageTexts.toFixed(0)
            }
            icon={faCommentDots}
          />
          <StatsBox
            title={"Most Texted Day"}
            stats={
              context.file.stats.basedOnDays[selectedOption.username][1]
                .mostActiveDay
            }
            icon={faCalendarWeek}
          />
          <StatsBox
            title={"Least Texted Day"}
            stats={context.file.stats.basedOnDays[selectedOption.username][1]
                .leastActiveDay}
            icon={faAngleDoubleUp}
          />
        </>
      }
    />
  );
}
