import React, { useContext, useState } from "react";
import { FileContext } from "../../pages/index";
import Section from "../common/Section";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import Select from "react-select";

export default function Heatmap() {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: "#dbdbdb",
      borderWidth: "1px",
      cursor: "pointer",
      justifyContent: "center",
      marginBottom: "2rem",
      width: "90%",
    }),
  };

  const today = new Date();
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    username: "All",
  });

  return (
    <Section>
      <div className="columns is-gapless  is-centered">
        <div className="column is-half">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={[...context.file.usernames,{username:'All'}]}
            getOptionLabel={(option) => option.username}
            getOptionValue={(option) => option.username}
            isSearchable={true}
            styles={customStyles}
            id={1}
          />
          <CalendarHeatmap
            startDate={shiftDate(today, -180)}
            endDate={today}
            values={context.file.stats.timeline[selectedOption.username]}
            horizontal={true}
            showMonthLabels={true}
            classForValue={(value) => {
              if (!value) {
                return "bg-color-github-empty";
              }
              return getClass(
                (value.count /
                  context.file.stats.summary.totalMessageExchanged) *
                  200
              );
            }}
            tooltipDataAttrs={(value) => {
              if (value.date == null) {
                return {
                  "data-tip": `No texts sent on this day`,
                };
              }
              return {
                "data-tip": `${value.count} texts sent on ${value.date}`,
              };
            }}
          />
          <ReactTooltip />
        </div>
      </div>
    </Section>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getClass(percentage) {
  return percentage < 0.5
    ? "bg-color-github-0"
    : percentage < 1
    ? "bg-color-github-1"
    : percentage < 1.5
    ? "bg-color-github-2"
    : percentage < 2
    ? "bg-color-github-3"
    : percentage < 2.5
    ? "bg-color-github-4"
    : percentage < 3
    ? "bg-color-github-5"
    : "bg-color-github-6";
}
