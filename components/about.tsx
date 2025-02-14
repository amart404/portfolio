"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After studying <span className="font-medium">Computer Science</span> at
        MSU Denver, I attended Flatiron School's coding bootcamp to get
        up-to-date with{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">I enjoy problem solving</span>, and getting to
        do so in a <span className="underline">creative</span> way is my
        favorite part of programming. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js and PostgresQL
        </span>
        . I also have experience in Python, AWS & GCP. I am currently looking
        for a full-time position as a software engineer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        guitar, working out and playing video games. I'm a quick learner, and am
        currently learning more about{" "}
        <span className="font-medium">Cybersecurity</span>.
      </p>
    </motion.section>
  );
}
