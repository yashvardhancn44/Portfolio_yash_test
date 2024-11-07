import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import insightDashImg from "@/public/insightDash.png";
import portfolioImg from "@/public/portfolio.png";
import notesappImg from "@/public/notesApp.png";
import yashcartImg from "@/public/yashcart.png";
import kakfaImg from "@/public/KafkaApp.png";
import recipeImg from "@/public/recipeApp.png";
import jobsImg from "@/public/reactjobshome.png";

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
      "Graduated in Electronics and Communication, worked on challenging research projects in bipedal robots and hand gesture recognition systems. Published 3 research papers in IEEE and Springer. Represented the college in basketball, served as design lead, and editorial member for the departmental magazine.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Vice Chairpeson of IEEE SIT student branch",
    location: "Siddaganga Institute of Technology, Tumkuru",
    description:
      "Strategically led a cross-cultural team of 117 people in organizing national-level events during COVID-19, engaging over 1,000 participants. Managed 10+ workshops, hackathons, and competitions, while leading the design, marketing, and sponsorship teams for 3 consecutive years.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "Software Engineer",
    location: "Cisco Systems, Bengaluru",
    description:
      "Part of the financial reporting team of CISCO, developing big data and web applications. Developed a Kafka consumer for data retrieval using Python, Kafka, and PostgreSQL, optimizing the transfer of 1 million data records in 130 seconds thereby saving time and cost for the team. Developed a dashboard web application for POC using ReactJS. Engaged in collaborative, cross-cultural Agile development, and played a key role in team meetings.",
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

export const projectsData = [
  {
    title: "Yashcart",
    description:
      "An eCommerce app with product browsing, JWT authentication, checkout, and admin management.",
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
    title: "User Interaction Analytics",
    description:
      " Real-time analytics system capturing interactions, streaming to Kafka, generating dashboard.",
    tags: [
      "React",
      "KafkaJS",
      "Express.js",
      "Recharts",
      "MongoDB",
      "Websockets",
    ],
    imageUrl: kakfaImg,
    gitlink: "https://github.com/yashvardhancn44/User-Interaction-Analytics",
  },
  {
    title: "Portfolio",
    description:
      "Dynamic portfolio app showcasing experience, projects, skills, with animations and responsiveness.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: portfolioImg,
    gitlink: "https://github.com/yashvardhancn44/Portfolio_yash_test",
  },
  {
    title: "Recipe App",
    description:
      "Recipe search app using Spoonacular API, saving favorites in local storage",
    tags: ["React", "Express.js", "PostgreSQL", "Prisma", "Typescript"],
    imageUrl: recipeImg,
    gitlink: "https://github.com/yashvardhancn44/Recipe-App-Frontend",
  },
  {
    title: "Notes App",
    description:
      "Full-stack Notes app with add, update, delete, and local storage persistence.",
    tags: ["React", "Express.js", "Prisma", "PostgresSQL"],
    imageUrl: notesappImg,
    gitlink: "https://github.com/yashvardhancn44/Notes-App-Full-Stack-Frontend",
  },
  {
    title: "Job Search Website",
    description:
      "Frontend job website enabling employers to add jobs and developers to search.",
    tags: [
      "React",
      "Tailwind CSS",
      "JSON-server",
      "React-router-dom",
      "React-toastify",
    ],
    imageUrl: jobsImg,
    gitlink: "https://github.com/yashvardhancn44/JobsListing-Frontend",
  },
  {
    title: "Insight Dashboard",
    description:
      "Dashboard app visualizing data with charts using the Recharts library",
    tags: ["React", "ReCharts", "Redux"],
    imageUrl: insightDashImg,
    gitlink: "https://github.com/yashvardhancn44/Insight-Dashboard-frontend",
  },
] as const;

export const skillsData = [
  "React.js",
  "TypeScript",
  "Python",
  "Java",
  "Amazon Web Service",
  "Node.js",
  "Spring Boot",
  "Nest.js",
  "Express.js",
  "Redux-Toolkit",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Kafka.js",
  "Next.js",
  "Kafka",
  "Tailwind",
  "Prisma",
  "Framer Motion",
] as const;
