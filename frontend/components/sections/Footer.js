import React from "react";
import Section from "../common/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Section variation={" is-primary "} containerVariant={" "} noBox={true}>
      <div className="columns">
        <div className="column is-6">
          <h1 className="title is-3">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" spin />
            Chatistics
          </h1>
          <h1 className="subtitle is-5 ">
            WhatsApp chat analytics and insights
          </h1>
          <a className="subtitle is-5 ">
            <FontAwesomeIcon icon={faGithub} className="title is-3" />
          </a>
        </div>
        <div className="column">
          <h1 className="subtitle is-6 is-spaced">Developers</h1>

          <h1 className="title is-5 ">Atharva Kulkarni</h1>
          <UserFooterLinks />
          <h1 className="title is-5 ">Sumit Kolpekwar</h1>
          <UserFooterLinks />
          <h1 className="title is-5 ">Yash Dewangan</h1>
          <UserFooterLinks />
        </div>
        <div className="column">
          <h1 className="subtitle is-6 is-spaced">About</h1>
          <h1 className="title is-5 ">Project</h1>
          <h1 className="title is-5 ">Privacy</h1>
          <h1 className="title is-5 ">Acknowledgements</h1>
        </div>
      </div>
    </Section>
  );
}

export const UserFooterLinks = ({ github, linkedin, instagram }) => {
  return (
    <h1 className="subtitle is-5 pb-2 ">
      <a>
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
      </a>
      <a>
        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
      </a>
      <a>
        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
      </a>
    </h1>
  );
};
