import React, { useContext } from "react";
import Layout from "../common/Layout";
import ReactWordcloud from "react-wordcloud";
import { FileContext } from "../../pages/index";
import StatsBox from "../StatsBox";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import {
  faCommentDots,
  faCalendarWeek,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

const options = {
  rotations: 2,
  rotationAngles: [0, 90],
  fontSizes: [20, 80 ],
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
    <Layout
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Word cloud of <span className="underline">most used words</span>
        </h1>
      }
      rightColumn={false}
      graph={<ReactWordcloud words={words} options={options} />}
      rightColumnContent={
        <>
          <StatsBox
            title={"Most Used Word"}
            stats={"hod"}
            icon={faCommentDots}
          />
          <StatsBox
            title={"Least Used Word"}
            stats={"a"}
            icon={faCalendarWeek}
          />
          <StatsBox
            title={"Average No of Emoji Per Text"}
            stats={2.6}
            icon={faAngleDoubleUp}
          />
        </>
      }
    />
  );
}
