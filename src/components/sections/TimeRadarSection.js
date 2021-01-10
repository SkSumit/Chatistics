import React, { useContext, useState } from "react";
import { FileContext } from "../../App";
import TimeRadarChart from "../graphs/TimeRadarChart";
import StatsBox from "../StatsBox";

export default function TimeRadarSection() {
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "All",
  });

  return (
    <section className="hero  ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column ">
              <TimeRadarChart />
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
