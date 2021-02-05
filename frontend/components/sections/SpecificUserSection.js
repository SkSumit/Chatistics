import React, { useContext } from "react";
import chunk from "lodash.chunk";
import Section from "../common/Section";
import { FileContext } from "../../pages/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";

export default function SpecificUserSection() {
  const context = useContext(FileContext);
  console.log(context)
  return (
    <Section>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          {chunk(context.file.stats.userspecific, 3).map((row, index) => {
            console.log(row)
            return (
              <div className="tile is-parent " key={index}>
                {row.map((item, index) => (
                  <div className="tile is-parent " key={index}>
                    <div className="tile is-child box bg-light-green">
                      <p className="title is-3 has-text-black" >
                        {item.name}
                      </p>
                      <p className="subtitle is-5 has-text-weight-medium has-text-orange">
                        {item.speciality ? item.speciality : " ..."}
                      </p>
                      <p className="subtitle is-5 has-text-black" >
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
                      <p className="title is-7 has-text-black" >
                        That's{" "}
                        <span className="has-text-orange">
                          {item.averageTexts} texts per day,
                        </span>
                      </p>
                      <p className="title is-7 has-text-black" >
                        350 😚 Emojis, 57 Links, 78 Media
                      </p>
                      <div className="title is-5">
                        <FontAwesomeIcon
                          icon={faFireAlt}
                          className="has-text-orange mr-2"
                        />
                        Highest Streak{" "}
                        <span className="has-text-orange">
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
