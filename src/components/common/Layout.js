import React from "react";
import Section from "./Section";

export const Layout = ({ sectionHeader, graph, rightColumnContent, rightColumn = true }) => {
  return (
    <Section>
      {sectionHeader}
      <div className="columns is-vcentered">
        <div className={`${rightColumn ?'column' : 'column is-4' }`}>{rightColumn? graph : rightColumnContent }</div>
        <div className={`${rightColumn ?'column is-4' : 'column' }`}>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                <div className="tile is-parent is-vertical">{rightColumn? rightColumnContent : graph }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Layout