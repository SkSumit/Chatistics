import React from "react";

import Section from "../common/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Hero({analytics}) {
  
  return (
    <Section
      variation={"is-medium is-primary pb-5 has-text-centered-desktop "}
      containerVariant={" "}
      noBox={true}
    >
      <h1 className="title is-1 has-text-centered-desktop">
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" spin />
        <Link href="/">Chatistics</Link> 
      </h1>
      <h1 className="subtitle is-3 has-text-centered-desktop">
        WhatsApp chat analytics and insights
        {
         
          ["Siddhesh", "Vaishali", "Rutwik"].map((user)=><p>Heyy {user}, we are developing a website for fun and to improve our skills, we don't aim to profit from it in any way.
          Head over to http://chatistics.vercel.app use it like you normally use any website. After that head over to https://forms.gle/LB1HVtmaJXPTNYMf7, which has 20 MCQ questions (all optional), which shouldn't take more than 2 mins and submit your feedback. Feel free to contact regarding any issues,Thanks! </p> )
        }
      </h1>
      <span className="title is-5 has-text-centered-desktop bg-light-green has-text-black my-6 px-3 py-1">
        {analytics.visited} visitors, {analytics.uploadCount} files analysed
      </span>
    </Section>
  );
}
