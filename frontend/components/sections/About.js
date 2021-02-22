import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import { Navbar } from "../Navbar";
import Section from "../common/Section";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section containerVariant={"bg-white mt-100 px-6  "} id="aboutProject">
        <h1 className="title is-3 ">About Project</h1>
        <h1 className="subtitle is-5 ">
          We got the idea to make the analyzer randomly and thought the current
          websites which provide these are either unsafe, have privacy issues,
          or lack proper stats. We started working on this as a fun
          side project, hoping to make it open-sourced and easily
          shareable through PDFs, provide in-depth necessary stats and make it
          look attractive. <br />
          Took us almost 2 months to plan and develop this project, and we are
          hoping to add more complex stats with the use of ML in the future.
          <br /> Our current tech stack is Next JS in the front along with Flask
          as API Backend and pandas to clean and extract the data from text
          files
        </h1>
      </Section>
      <Section containerVariant={"bg-white px-6 "} id="aboutPrivacy">
        <h1 className="title is-3 ">About Privacy</h1>
        <h1 className="subtitle is-5 ">
        We respect your privacy, we don't store chats. One of the major reason to make this open-sourced is the privacy concern. 
          <br />
          We are a group of students and our only aim of this project is to learn
          the tech stack used and provide some insights of the chats to the
          users of this website.
          <br />
          We do not hope to gain anything from this project, except for some stars on Github and adding this to the list of projects developed on our resumes.
          <br />
          <span className="has-text-weight-semibold bg-light-green px-1">
            PS We all are looking for internships
          </span>
        </h1>
      </Section>
      <Section containerVariant={"bg-white px-6 "}  id="aboutAcknowledgements">
        <h1 className="title is-3 ">Acknowledgements</h1>
        <h1 className="subtitle is-5 ">Stack Overflow and all the people who tested our website and provided us 
        essential feedbacks to improve the website</h1>
      </Section>
      <Footer />
    </div>
  );
};

export default About;
