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
        I am a creative 🧠 and passionate individual from the picturesque city
        of 🌄 Chikmagaluru, Karnataka, with a love for technology, learning, and
        collaboration. During my 🎓 graduation, I engaged in challenging
        research projects, including studying bipedal robots and developing a
        gesture recognition system, and published three research papers. As a
        shooting guard, I proudly represented my college in basketball🏀,
        winning a VTU tournament. With strong interpersonal skills 🤝, I thrive
        in team environments, and my leadership roles—such as Vice Chairperson
        of the IEEE Student Branch—further honed my abilities, as I led a team
        of 117 members through challenges like COVID-19😷 while organizing
        national-level events.
      </p>
      <p className="mb-3">
        My professional💼 journey spans diverse experiences, from developing big
        data solutions and web applications at Cisco, where I built a 🛠️Kafka
        consumer that optimized data transfer for a million records, to
        freelance projects and contributing to an Ed-tech startup as both a web
        developer and tutor. Beyond coding, I stay active with interests like
        Reading📚, Running🏃‍♂️, Basketball, Cooking🍳, Spirituality🧘‍♀️, Movies🎥
        and Travelling✈️. I thrive in collaborative environments and embrace
        values like hard work, intelligence, discipline, focus, and belief to
        tackle challenges and drive success.
      </p>
    </motion.section>
  );
}
