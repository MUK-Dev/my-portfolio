import React, { useEffect, useState } from "react";

import s from "../styles/index.module.css";
import { OnLoadAnimation } from "@components/animations";
import { motion, AnimatePresence } from "framer-motion";
import { HomeBackground } from "@components/common/Illustrations";
import { HomeView } from "@components/ui";

const home = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function Home() {
  const [animation, stopAnimation] = useState(true);

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
    <motion.div
      className={s.root}
      variants={home}
      initial="hidden"
      animate="show"
    >
      <HomeBackground />
      <HomeView />
    </motion.div>
  );

  return <AnimatePresence exitBeforeEnter>{body}</AnimatePresence>;
}
