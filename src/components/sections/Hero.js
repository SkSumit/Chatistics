import React from "react";
import Section from "../common/Section";

export default function Hero() {
  return (
    <Section
      variation={"is-medium is-primary pb-3"}
      containerVariant={" "}
      noBox={true}
    >
      <h1 className="title is-1 has-text-centered-desktop">
        <i className="fab fa-whatsapp fa-spin" /> Chatistics
      </h1>
      <h1 className="subtitle is-3 has-text-centered-desktop">
        WhatsApp chat analytics and insights
      </h1>
    </Section>
  );
}
