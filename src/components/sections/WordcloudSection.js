import React, { useContext } from "react";
import Section from "../common/Section";
import ReactWordcloud from "react-wordcloud";
import { FileContext } from "../../App";
import StatsBox from "../StatsBox";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const options = {
  rotations: 2,
  rotationAngles: [0, 0],
  fontSizes: [20, 100],
};

export default function WordcloudSection() {
  const context = useContext(FileContext);
  const words = context.file.stats.wordcloud.map((item) => {
    return {
      text: item.WORD,
      value: item.FREQUENCY,
    };
  });
  return (
    <Section>
      <h1 className="subtitle is-3 ">
      Word cloud of <span className="underline">most used words</span>
      </h1>
      <div className="columns is-vcentered">
        <div className="column is-4">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <StatsBox
                    title={"Most Used Word"}
                    stats={'hod'}
                    icon={
                      <i
                        className="fas fa-comment-dots fa-2x"
                        style={{ color: "#000" }}
                      />
                    }
                  />
                  <StatsBox
                    title={"Least Used Word"}
                    stats={'a'}
                    icon={
                      <i
                        className="fas fa-calendar-week fa-2x"
                        style={{ color: "#000" }}
                      />
                    }
                  />
                  <StatsBox
                    title={"Average No of Emoji Per Text"}
                    stats={2.6}
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
        <div className="column ">
          <ReactWordcloud words={words} options={options} />
        </div>
      </div>
    </Section>
  );
}
