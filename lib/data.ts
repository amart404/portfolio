import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "CS Degree and Bootcamp",
    location: "Denver, CO",
    description:
      "After finishing school at MSU Denver for Computer Science, I attended Flatiron School's software engineering bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "Boulder, CO",
    description:
      "I worked as a software engineer at Uplight in Boulder, Colorado for 3 years. The team I was a part of was a full-stack team that improved and maintained databases, APIs and SAAS applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full-stack Developer",
    location: "Alamosa, CO",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node.js, TypeScript, Tailwind, Python and PostgresQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Git",
  "AWS",
  "GCP",
  "Docker",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
