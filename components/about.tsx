"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.25);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a diverse, creative, and passionate individual from the picturesque
        city of 🌄 Chikmagaluru, Karnataka. My love for technology and knowledge
        is complemented by strong interpersonal, communication, and management
        skills. I enjoy working with teams 🤝 and believe that I can achieve
        more by contributing to the team and collaborating with others. My go-to
        values are hard work, smartness🧠, discipline, focus, and belief,
        through which I believe I can tackle any challenges and achieve success.
      </p>
      <p className="mb-3">
        During my 🎓 graduation, I engaged in challenging research projects,
        including studying bipedal robots and developing a gesture recognition
        system. As a shooting guard, I proudly represented my college in
        basketball🏀, winning a VTU tournament. My leadership and collaboration
        skills led me to the role of Vice Chairperson of the IEEE Student Branch
        at SIT, where I successfully guided a team of 117 members in organizing
        national-level events. I take great satisfaction in managing our team
        during the challenging times of COVID-19😷, where we remained the only
        functional team at SIT.
      </p>
      <p className="mb-3">
        Professionally 💼, I began my journey at Cisco as a software developer
        in the Financial Reporting team, selected through a rigorous six-stage
        process in the Cisco Ideathon. I designed a Kafka consumer 🖥️ for
        efficient data retrieval using Python, Kafka and PostgreSQL, optimizing
        the transfer of one million data records and saving time and costs for
        the team. Additionally, I developed a React-based frontend dashboard as
        a proof of concept and enhanced my skills 🛠️ in agile methodologies,
        Kafka, PostgreSQL, ORMs, React, Git, Express.js, and Node.js. My
        professional experience also extends to freelance development, where I
        created an AI-integrated full-stack website, and contributed to an
        Ed-tech startup, 4U Academy, both as a developer and part-time tutor.
      </p>
      <p>
        My other interests are Reading📚, Running🏃‍♂️, Basketball, Cooking🍳,
        Spirituality🧘‍♀️, Movies🎥 and Travelling✈️.
      </p>
    </motion.section>
  );
}
