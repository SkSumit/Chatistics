import React, { useContext, useState } from "react";
import { FileContext } from "../../App";
import DayBar from "../graphs/DayBar";
import StatsBox from "../StatsBox";
import Section from "../common/Section";

export default function DaySection() {
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "All",
  });

  return (
    <Section>
      <h1 className="subtitle is-3 ">
        Breakdown of your chats, <span className="underline">day-wise</span>
      </h1>
      <div className="columns is-vcentered">
        <div className="column is-4">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <StatsBox
                    title={"Average Texts Per Day"}
                    stats={
                      context.file.stats.analysis.basedOnDays[
                        selectedOption.value
                      ].averageTexts
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
                      context.file.stats.analysis.basedOnDays[
                        selectedOption.value
                      ].mostActiveDay
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
                      context.file.stats.analysis.basedOnDays[
                        selectedOption.value
                      ].mostFrequentDay
                    }
                    icon={
                      <i
                        className="fas fa-angle-double-up fa-2x"
                        style={{ color: "#000" }}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <DayBar
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
    </Section>
  );
}
