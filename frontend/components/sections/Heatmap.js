import React, { useContext } from "react";
import Section from "../common/Section";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { FileContext } from "../../pages/index";
const today = new Date();
export default function Heatmap() {
  const context = useContext(FileContext);
  return (
    <Section>
      <h1 className="subtitle is-3 ">
        It's called a Heatmap not,{" "}
        <span className="underline">GitHub commit wall</span>
      </h1>
      <div className="columns is-gapless  is-centered">
        <div className="column is-half">
          <CalendarHeatmap
            startDate={shiftDate(today, -180)}
            endDate={today}
            values={context.file.stats.heatmap.all}
            horizontal={true}
            showMonthLabels={true}
            classForValue={(value) => {
              if (!value) {
                return "bg-color-github-empty";
              }
              return getClass((value.count / context.file.stats.summary.total_message) * 100);
            }}
            tooltipDataAttrs={(value) => {
              return {
                "data-tip": `${value.date} has count: ${value.count}`,
              };
            }}
          />
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
