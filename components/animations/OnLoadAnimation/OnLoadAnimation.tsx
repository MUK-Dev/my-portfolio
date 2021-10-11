import { OnLoadIcon } from "@components/common/Illustrations";
import { motion } from "framer-motion";
import { FC } from "react";

import s from "./OnLoadAnimation.module.css";

const board = {
  hidden: {
    scale: 1.8,
    transition: {
      duration: 1.2,
    },
  },
  show: {
    scale: 1.4,
    transition: {
      duration: 1.2,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
      delay: 1.5,
    },
  },
};

interface Props {
  animation: boolean;
  stopAnimation: () => void;
}

const OnLoadAnimation: FC<Props> = ({ animation, stopAnimation }) => {
  return (
    animation && (
      <motion.div
        variants={board}
        initial="hidden"
        animate="show"
        exit="exit"
        key="animate-on-load"
        className={s.root}
        onAnimationComplete={stopAnimation}
      >
        <OnLoadIcon />
      </motion.div>
    )
  );
};

export default OnLoadAnimation;
