import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import insightdashboardImg from "@/public/insightdashboard.png";
import insightDashImg from "@/public/insightDash.png";
import portfolioImg from "@/public/portfolio.png";
import notesappImg from "@/public/notesApp.png";
import yashcartImg from "@/public/yashcart.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering",
    location: "Siddaganga Institute of Technology, Tumkuru",
    description:
      "Graduated in Electronics and Communication. Worked on projects related to Robotics and Artificial intelligence (M.L. and Image processing). Published 3 research papers in IEEE and Springer",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Vice Chairpeson of IEEE SIT student branch",
    location: "Siddaganga Institute of Technology, Tumkuru",
    description:
      "Led a cross cultural team of 117 people in organizing National level events, Hackathons, Competetions. Led the team during Covid, successfully transitioned all events to online mode and achieved success.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "Software Engineer",
    location: "Cisco Systems, Bengaluru",
    description:
      "Part of the financial reporting team of CISCO, developing big data and web applications. Developed a Kafka consumer for data retrieval using Python, Kafka, and PostgreSQL, optimizing the transfer of 1 million data records in 130 seconds thereby saving time and cost for the team. Developed a dashboard web application for POC using ReactJS.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelancer, Chikmagaluru",
    description:
      "Designed and created a web application for an Ed-tech startup using ReactJS. Developed a AI integrated web application using HTML, CSS, Bootstrap, Keras-Tensorflow, and Python-Flask to predict 10 tomato leaf diseases with a prediction accuracy of 87%",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;
/*
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
 */

export const projectsData = [
  {
    title: "Yashcart",
    description: "An Ecommerce Website.",
    tags: [
      "React",
      "Express.js",
      "Redux-toolkit",
      "JWT authentication",
      "MongoDB",
    ],
    imageUrl: yashcartImg,
    gitlink: "https://github.com/yashvardhancn44/Ecommerce-website",
  },
  {
    title: "Portfolio",
    description: "A responsive and animative Portfolio website.",
    tags: ["React", "Next.js", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: portfolioImg,
    gitlink: "https://github.com/yashvardhancn44/Portfolio_yash_test",
  },
  {
    title: "Insight Dashboard",
    description: "A dashboard which shows data in may graphs",
    tags: ["React", "ReCharts", "Redux"],
    imageUrl: insightDashImg,
    gitlink: "https://github.com/yashvardhancn44",
  },
  {
    title: "Notes App",
    description: "A Full stack Notes app",
    tags: ["React", "Express.js", "Prisma", "PostgresSQL"],
    imageUrl: notesappImg,
    gitlink: "https://github.com/yashvardhancn44/Notes-App-Full-Stack-Frontend",
  },
] as const;

/*
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    gitlink: "https://github.com/yashvardhancn44",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    gitlink: "https://github.com/yashvardhancn44",
  },
  {
    title: "Insight Dashboard",
    description: "A dashboard which shows data in may graphs",
    tags: ["React", "ReCharts", "Redux"],
    imageUrl: insightdashboardImg,
    gitlink: "https://github.com/yashvardhancn44",
  },
] as const;
 */

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "Express.js",
  "Next.js",
  "Node.js",
  "Redux-Toolkit",
  "Kafka",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Tailwind",
  "Prisma",
  "Framer Motion",
] as const;
