import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { motion, AnimatePresence } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';
import { collection, getDocs, query } from 'firebase/firestore';

import s from '../styles/index.module.css';
import { OnLoadAnimation } from '@components/animations';
import { HomeBackground } from '@components/common/Illustrations';
import {
  BackendSkillsView,
  ConclusionView,
  ContactView,
  FrontendSkillsView,
  HomeView,
  ProjectsView,
} from '@components/ui';
import { db } from '../firebase';

export const getStaticProps = async () => {
  const frontendCollectionRef = collection(db, 'frontend-skills');
  const backendCollectionRef = collection(db, 'backend-skills');
  const projectsCollectionRef = collection(db, 'projects');

  const frontendSkills = [];
  const backendSkills = [];
  const projectsData = [];

  const frontend = await getDocs(query(frontendCollectionRef));
  const backend = await getDocs(query(backendCollectionRef));
  const projects = await getDocs(query(projectsCollectionRef));

  frontend.docs.map((d) => frontendSkills.push(d.data()));
  backend.docs.map((d) => backendSkills.push(d.data()));
  projects.docs.map((d) => projectsData.push(d.data()));

  // const frontendSkills = [
  //   { skill: "HTML" },
  //   { skill: "CSS" },
  //   { skill: "Vanilla JS" },
  //   { skill: "Bootstrap" },
  //   { skill: "Materialize CSS" },
  //   { skill: "Adobe Illustrator" },
  //   { skill: "SVG creation & animation" },
  //   { skill: "React" },
  //   { skill: "Material UI" },
  //   { skill: "Tailwind CSS" },
  //   { skill: "Next.js" },
  // ];

  // const backendSkills = [
  //   { skill: "Node.js" },
  //   { skill: "Express" },
  //   { skill: "ejs Templating" },
  //   { skill: "Feathers.js" },
  //   { skill: "MongoDB" },
  //   { skill: "MySQL" },
  //   { skill: "PostgresSQL" },
  //   { skill: "Firebase" },
  //   { skill: "Socket.io" },
  //   { skill: "File Uploads" },
  // ];

  // const projects = [
  //   {
  //     title: "Paynest",
  //     description:
  //       "A Crypto Currency App made with Flutter and Firebase. (Android)",
  //   },
  //   {
  //     title: "Whooly Craft",
  //     description:
  //       "e-Commerce Application made in MERN Stack. (Frontend + Backend + Admin Panel)",
  //   },
  //   {
  //     title: "Let's Write",
  //     description:
  //       "Real Time Question & Answer MERN App with Rooms. (Frontend + Backend)",
  //   },
  //   {
  //     title: "Bethak",
  //     description: "Restaurant Management System made with React and Firebase.",
  //   },
  //   {
  //     title: "We-Link",
  //     description: "Chat App Backend made in Node.js Express MongoDB",
  //   },
  //   {
  //     title: "WrtArt",
  //     description: "Article Web App made in MERN stack. (Frontend + Backend)",
  //   },
  //   {
  //     title: "Shopify eCommerce NEXT",
  //     description:
  //       "e-Commerce App made with NEXT.js, Typescript, and Shopify Api",
  //   },
  // ];

  return {
    props: {
      frontendSkills,
      backendSkills,
      // projects,
      projects: projectsData,
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
      key='animate-on-load'
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
        <FrontendSkillsView
          skills={frontendSkills as [{ skill: string }]}
          count={pageNo}
        />
      </section>

      <section className={s.root}>
        <BackendSkillsView
          skills={backendSkills as [{ skill: string }]}
          count={pageNo}
        />
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
