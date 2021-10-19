import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import s from "../styles/index.module.css";
import { OnLoadAnimation } from "@components/animations";
import { motion, AnimatePresence } from "framer-motion";
import { HomeBackground } from "@components/common/Illustrations";
import {
  BackendSkillsView,
  ConclusionView,
  ContactView,
  FrontendSkillsView,
  HomeView,
  ProjectsView,
} from "@components/ui";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Vanilla JS",
    "Bootstrap",
    "Materialize CSS",
    "Adobe Illustrator",
    "SVG creation & animation",
    "React",
    "Material UI",
    "Tailwind CSS",
    "Next.js",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "ejs Templating",
    "Feathers.js",
    "MongoDB",
    "MySQL",
    "PostgresSQL",
    "Firebase",
    "Socket.io",
    "File Uploads",
  ];

  const projects = [
    {
      title: "Paynest",
      description:
        "A Crypto Currency App made with Flutter and Firebase. (Android)",
    },
    {
      title: "Whooly Craft",
      description:
        "e-Commerce Application made in MERN Stack. (Frontend + Backend + Admin Panel)",
    },
    {
      title: "Let's Write",
      description:
        "Real Time Question & Answer MERN App with Rooms. (Frontend + Backend)",
    },
    {
      title: "Bethak",
      description: "Restaurant Management System made with React and Firebase.",
    },
    {
      title: "We-Link",
      description: "Chat App Backend made in Node.js Express MongoDB",
    },
    {
      title: "WrtArt",
      description: "Article Web App made in MERN stack. (Frontend + Backend)",
    },
    {
      title: "Shopify eCommerce NEXT",
      description:
        "e-Commerce App made with NEXT.js, Typescript, and Shopify Api",
    },
  ];

  return {
    props: {
      frontendSkills,
      backendSkills,
      projects,
    },
    revalidate: 4 * 60 * 60,
  };
};

export default function Home({
  frontendSkills,
  backendSkills,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [animation, stopAnimation] = useState(true);

  const [pageNo, setPageNo] = useState<number>(0);

  const pageChangeHandler = (e: number) => {
    setPageNo(e);
  };

  const body = animation ? (
    <motion.div
      className={s.loading}
      key="animate-on-load"
      onAnimationComplete={() => stopAnimation(false)}
    >
      <OnLoadAnimation
        animation={animation}
        stopAnimation={() => stopAnimation(false)}
      />
    </motion.div>
  ) : (
    <ReactPageScroller animationTimer={500} pageOnChange={pageChangeHandler}>
      <section className={s.root}>
        <HomeBackground />
        <HomeView />
      </section>

      <section className={s.root}>
        <FrontendSkillsView skills={frontendSkills} count={pageNo} />
      </section>

      <section className={s.root}>
        <BackendSkillsView skills={backendSkills} count={pageNo} />
      </section>

      <section className={s.root}>
        <ProjectsView projects={projects} count={pageNo} />
      </section>

      <section className={s.root}>
        <ContactView count={pageNo} />
      </section>

      <section className={s.root}>
        <ConclusionView count={pageNo} />
      </section>
    </ReactPageScroller>
  );

  return <AnimatePresence exitBeforeEnter>{body}</AnimatePresence>;
}
