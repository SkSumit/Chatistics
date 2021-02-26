import React, { useContext, useState } from "react";
import chunk from "lodash.chunk";
import Section from "../common/Section";
import { FileContext } from "../../pages/index";

export default function SpecificUserSection() {
  const context = useContext(FileContext);
  const [range, setRange] = useState(0);
  const noOfObjectsinPage = 12;

  return (
    <Section>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          {chunk(
            Object.keys(
              objSlice(
                context.file.stats.userspecific,
                range,
                noOfObjectsinPage
              )
            ),
            3
          ).map((row, index) => {
            return (
              <div className="tile is-parent " key={index}>
                {row.map((item, index) => (
                  <div className="tile is-parent " key={index}>
                    <div className="tile is-child box bg-light-green">
                      <p className="title is-3 has-text-black">{item}</p>
                      <p className="subtitle is-5 has-text-weight-medium has-text-orange">
                        {item.speciality ? item.speciality : " ..."}
                      </p>
                      <p className="subtitle is-5 has-text-black">
                        <span className="has-text-weight-semibold">
                          {context.file.stats.userspecific[item].totalMessages}{" "}
                        </span>
                        messages over
                        <span className="has-text-weight-semibold">
                          {" "}
                          {context.file.stats.userspecific[item].totalDays}{" "}
                        </span>
                        days.
                      </p>
                      <p className="title is-7 has-text-black">
                        That's
                        <span className="has-text-orange">
                          {" "}
                          {context.file.stats.userspecific[
                            item
                          ].averageMessagePerDay.toFixed(0)}{" "}
                          texts per day,
                        </span>{" "}
                        {context.file.stats.userspecific[
                          item
                        ].averageWordsPerMessage.toFixed(0)}{" "}
                        words per message
                      </p>
                      <p className="title is-7 has-text-black">
                        {context.file.stats.userspecific[item].totalEmojis}{" "}
                        Emojis,{" "}
                        {context.file.stats.userspecific[item].totalLinks}{" "}
                        Links,{" "}
                        {context.file.stats.userspecific[item].totalMedia} Media
                      </p>
                      <p className="title is-7 has-text-black ">
                        <span className="subtitle is-5 has-text-orange mt-2 has-text-weight-semibold">
                          {" "}
                          {context.file.stats.userspecific[item].mostActiveDate}
                        </span>
                        , being the most active date
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        {Array(
          Math.round(
            Object.keys(context.file.stats.userspecific).length /
              noOfObjectsinPage
          )
        )
          .fill()
          .map((item, index) => {
            return (
              <div className="button" key={index} onClick={()=>setRange(index * noOfObjectsinPage)}>
                {index + 1}
              </div>
            );
          })}
      </div>
    </Section>
  );
}
function objSlice(obj, start, difference) {
  var filteredKeys = Object.keys(obj).slice(start, start + difference);
  var newObj = {};
  filteredKeys.forEach(function (key) {
    newObj[key] = obj[key];
  });
  return newObj;
}


