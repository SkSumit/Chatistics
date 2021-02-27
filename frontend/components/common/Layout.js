import React, { useContext, useState } from "react";
import { FileContext } from "../../pages/index";
import Section from "./Section";
import Select from "react-select";

export const Layout = ({
  sectionHeader,
  graph,
  rightColumnContent,
  rightColumn = true,
  showSelect = true,
  selectedOption, 
  setSelectedOption,
 

}) => {

  const context = useContext(FileContext);
 
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: "#dbdbdb",
      borderWidth: "1px",
      cursor: "pointer",
      justifyContent: "center",
      marginBottom: "2rem",
      width : '90%'
    }),
  };

  return (
    <Section>
      {sectionHeader}

      <div className="columns is-vcentered">
        <div className={`${rightColumn ? "column" : "column is-4"}`}>
          <TiledLayout>
            {rightColumn ? (
              <>
                {showSelect && (
                  <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={[...context.file.usernames,{username:'All'}]}
                  getOptionLabel ={(option)=>option.username}
                  getOptionValue ={(option)=>option.username}
                  isSearchable={true}
                  styles={customStyles}
                  id={1}
                  />
                )}
                {graph}
              </>
            ) : (
              rightColumnContent
            )}
          </TiledLayout>
        </div>
        <div className={`${rightColumn ? "column is-4" : "column"}`}>
          <TiledLayout>
            {rightColumn ? (
              rightColumnContent
            ) : (
              <>
                {showSelect && (
                  <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={[...context.file.usernames,{username:"All"}]}
                  getOptionLabel ={(option)=>option.username}
                  getOptionValue ={(option)=>option.username}
                  isSearchable={true}
                  styles={customStyles}
                  id={1}
                  />
                )}
                {graph}
              </>
            )}
          </TiledLayout>
        </div>
      </div>
    </Section>
  );
};

export const TiledLayout = ({ children }) => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-12">
        <div className="tile">
          <div className="tile is-parent is-vertical">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
