import React, { useContext } from "react";
import { FileContext } from "../../App";
import DayBar from "../graphs/DayBar";
import StatsBox from "../StatsBox";

export default function DaySection() {
  const context = useContext(FileContext);
  // const {stats: analysis } = context
  // console.log(context.stats.mock[0]);
  return (
    <section className="hero  ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-4">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <StatsBox
                        title={"Average Texts Per Day"}
                        stats={context.stats.analysis.basedOnDays.averageTexts}
                        icon={
                          <i
                            className="fas fa-comment-dots fa-2x"
                            style={{ color: "#000" }}
                          />
                        }
                      />
                      <StatsBox
                        title={"Most Texted Day"}
                        stats={context.stats.analysis.basedOnDays.mostActiveDay}
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
                          context.stats.analysis.basedOnDays.mostFrequentDay
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
              <DayBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
