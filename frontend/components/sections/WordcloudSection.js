import React, { useContext, useState } from "react";
import Layout from "../common/Layout";
import ReactWordcloud from "react-wordcloud";
import { FileContext } from "../../pages/index";
import StatsBox from "../StatsBox";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import {
  faCommentDots,
  faCommentSlash,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";

const options = {
  rotations: 2,
  rotationAngles: [0, 90],
  fontSizes: [20, 80],
};

export default function WordcloudSection() {
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    username: "All",
  });

  return (
    <Layout
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Word cloud of <span className="underline">most used words</span>
        </h1>
      }
      rightColumn={false}
      graph={
        context.file.stats.wordcloud[selectedOption.username] == null ? (
          <h1 className="subtitle is-3 has-text-centered">
          Woops! This user has no words!
        </h1>
        ) : (
          <ReactWordcloud
            words={
              context.file.stats.wordcloud[selectedOption.username]["wordUsage"]
            }
            options={options}
          />
        )
      }
      rightColumnContent={
        <>
          <StatsBox
            title={"Most Used Word"}
            stats={
              context.file.stats.wordcloud[selectedOption.username] == null
                ? "No Stats"
                : context.file.stats.wordcloud[selectedOption.username][
                    "wordStat"
                  ].mostUsedWord
            }
            icon={faCommentDots}
          />
          <StatsBox
            title={"Least Used Word"}
            stats={
              context.file.stats.wordcloud[selectedOption.username] == null
                ? "No Stats"
                : context.file.stats.wordcloud[selectedOption.username][
                    "wordStat"
                  ].leastUsedWord
            }
            icon={faCommentSlash}
          />
          <StatsBox
            title={"Average No of Emoji Per Text"}
            stats={2.6}
            icon={faIcons}
          />
        </>
      }
    />
  );
}
