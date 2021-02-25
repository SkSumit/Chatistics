import React from "react";
import Section from "../common/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
          <a
            href="https://github.com/SkSumit/Chatistics"
            target="_blank"
            className="subtitle is-5 "
          >
            <FontAwesomeIcon icon={faGithub} className="title is-3" />
          </a>
        </div>
        <div className="column">
          <h1 className="subtitle is-6 is-spaced">Developers</h1>

          <h1 className="title is-5 ">Atharva Kulkarni</h1>
          <UserFooterLinks 
           github={"https://github.com/AK9175"}
           linkedin={"https://www.linkedin.com/in/atharva-kulkarni-b119b7195/"}
           instagram={"https://www.instagram.com/atharva_kulkarni12/"}/>
          <h1 className="title is-5 ">Sumit Kolpekwar</h1>
          <UserFooterLinks
            github={"https://github.com/SkSumit"}
            linkedin={"https://www.linkedin.com/in/sumitkolpekwar/"}
            instagram={"https://www.instagram.com/sumitkolpekwar/"}
          />
          <h1 className="title is-5 ">Yash Dewangan</h1>
          <UserFooterLinks 
           github={"https://github.com/Yashdew"}
           linkedin={"https://www.linkedin.com/in/yash-dewangan-903346132/"}
           instagram={"https://www.instagram.com/yashdewangan_/"}
           />
        </div>
        <div className="column">
          <h1 className="subtitle is-6 is-spaced">About</h1>

          <h1 className="title is-5 ">
            <Link href="/project">Project</Link>
          </h1>

          <h1 className="title is-5 ">
            <Link href="/project#aboutPrivacy" scroll={false}>
              Privacy
            </Link>
          </h1>
          <h1 className="title is-5 ">
            <Link href="/project#aboutAcknowledgements" scroll={false}>
              Acknowledgements
            </Link>
          </h1>
        </div>
      </div>
    </Section>
  );
}

export const UserFooterLinks = ({ github, linkedin, instagram }) => {
  return (
    <h1 className="subtitle is-5 pb-2 ">
      <a href={github} target="_blank">
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
      </a>
      <a href={linkedin} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
      </a>
      <a href={instagram} target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
      </a>
    </h1>
  );
};
