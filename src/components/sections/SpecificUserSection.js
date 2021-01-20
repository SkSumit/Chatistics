import React, { useContext } from "react";
import { chunk } from "lodash";
import Section from "../common/Section";
import { FileContext } from "../../App";

export default function SpecificUserSection() {
  const context = useContext(FileContext);
  return (
    <Section>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          {chunk(context.file.stats.userSpecific, 3).map((row, index) => {
            return (
              <div className="tile is-parent " key={index}>
                {row.map((item) => (
                  <div className="tile is-parent ">
                    <div className="tile is-child box bg-light-green">
                      <p className="title is-3 " style={{ color: "#000" }}>
                        {item.name}
                      </p>
                      <p
                        className="subtitle is-5 has-text-weight-medium"
                        style={{ color: "#e25822" }}
                      >
                        {item.speciality ? item.speciality : " ..."}
                      </p>
                      <p className="subtitle is-5" style={{ color: "#000" }}>
                        <span className="has-text-weight-semibold">
                          {item.totalMessageExchanged}{" "}
                        </span>{" "}
                        messages over
                        <span className="has-text-weight-semibold">
                          {" "}
                          {item.totalDays}{" "}
                        </span>{" "}
                        days.
                      </p>
                      <p className="title is-7" style={{ color: "#000" }}>
                        That's{" "}
                        <span style={{ color: "#e25822" }}>
                          {item.averageTexts} texts per day,
                        </span>
                      </p>
                      <p className="title is-7" style={{ color: "#000" }}>
                        350 😚 Emojis, 57 Links, 78 Media
                      </p>
                      <div className="title is-5">
                        <i
                          className="fas fa-fire-alt  mr-2"
                          style={{ color: " #e25822 " }}
                        />
                        Highest Streak{" "}
                        <span style={{ color: " #e25822 " }}>
                          {item.highestStreak}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}


