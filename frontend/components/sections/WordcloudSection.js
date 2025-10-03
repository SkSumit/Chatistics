import { useContext, useState} from "react";
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
  const { file } = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({ username: "All" });

  const wcData = file?.stats?.wordcloud?.[selectedOption.username];
  const emojiStats =
    file?.stats?.emoji?.[selectedOption.username]?.emojiStat ?? null;

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
        !wcData ? (
          <h1 className="subtitle is-3 has-text-centered">
            Woops! This user has no words!
          </h1>
        ) : (
          <div style={{ width: "100%", height: 420, overflow: "hidden" }}>
            <ReactWordcloud
              words={wcData.wordUsage}
              options={options}
            />
          </div>
        )
      }
      rightColumnContent={
        <>
          <StatsBox
            title={"Most Used Word"}
            stats={wcData ? wcData.wordStat.mostUsedWord : "No Stats"}
            icon={faCommentDots}
          />
          <StatsBox
            title={"Least Used Word"}
            stats={wcData ? wcData.wordStat.leastUsedWord : "No Stats"}
            icon={faCommentSlash}
          />
          <StatsBox
            title={"Average No of Emoji Per Text"}
            stats={emojiStats ? emojiStats.emojiPerText.toFixed(2) : "No Stats"}
            icon={faIcons}
          />
        </>
      }
    />
  );
}
