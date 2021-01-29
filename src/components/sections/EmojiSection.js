import React, { useContext } from "react";
import { FileContext } from "../../App";
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

  return (
    <Layout
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Emojis because <span className="underline">why not?</span>
        </h1>
      }
      rightColumn={true}
      graph={<EmojiChart />}
      rightColumnContent={
        <>
          <StatsBox
            title={"Most Used Emojis"}
            stats={context.file.stats.emoji.map((item, index) => {
              return index >= 5 ? null : `${item.Emoji}`;
            })}
            icon={faCommentDots}
          />
          <StatsBox
            title={"Least Used Emojis"}
            stats={context.file.stats.emoji
              .slice(Math.max(context.file.stats.emoji.length - 5, 1))
              .map((item, index) => {
                return index >= 5 ? null : `${item.Emoji}`;
              })}
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
