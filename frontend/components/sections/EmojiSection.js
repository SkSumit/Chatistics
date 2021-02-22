import React, { useContext, useState } from "react";
import { FileContext } from "../../pages/index";
import EmojiChart from "../graphs/EmojiChart";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
import {
  faCommentDots,
  faCalendarWeek,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

export default function EmojiSection() {
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    username: "All",
  });

  return (
    <Layout
    selectedOption={selectedOption}
    setSelectedOption={ setSelectedOption}
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Emojis because <span className="underline">why not?</span>
        </h1>
      }
      rightColumn={true}
      graph={<EmojiChart        selectedOption={selectedOption}
      setSelectedOption={setSelectedOption} />}
      rightColumnContent={
        <>
          <StatsBox
            title={"Most Used Emojis"}
            stats={context.file.stats.emoji[selectedOption.username].emojiUsage.map((item, index) => {
              return index >= 5 ? null : `${item.emoji}`;
            })}
            icon={faCommentDots}
          />
          <StatsBox
            title={"Number of Emoji Used"}
            stats={context.file.stats.emoji[selectedOption.username].emojiStat.totalEmojis}
            icon={faCalendarWeek}
          />
          <StatsBox
            title={"Number of Unqiue Emojis "}
            stats={context.file.stats.emoji[selectedOption.username].emojiStat.totalUniqueEmojis}
            icon={faAngleDoubleUp}
          />
        </>
      }
    />
  );
}
