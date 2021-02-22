import React from "react";
import Section from "../common/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <Section
      variation={"is-medium is-primary pb-3"}
      containerVariant={" "}
      noBox={true}
    >
      <h1 className="title is-1 has-text-centered-desktop">
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" spin />
        <Link href="/">Chatistics</Link> 
      </h1>
      <h1 className="subtitle is-3 has-text-centered-desktop">
        WhatsApp chat analytics and insights
      </h1>
    </Section>
  );
}
