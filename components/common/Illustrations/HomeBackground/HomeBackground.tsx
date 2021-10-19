import { motion } from "framer-motion";

import s from "./HomeBackground.module.css";

const background = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

const HomeBackground = () => {
  return (
    <svg
      key="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 852 852"
      className={s.root}
    >
      <motion.circle
        key="_6"
        data-name="6"
        className={s.cls1}
        cx="426"
        variants={background}
        initial="hidden"
        transition={{ duration: 0.1, delay: 1 }}
        animate="show"
        cy="426"
        r="426"
      />
      <motion.circle
        key="_5"
        data-name="5"
        className={s.cls2}
        cx="426"
        variants={background}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.1, delay: 0.8 }}
        cy="426"
        r="355"
      />
      <motion.circle
        key="_4"
        data-name="4"
        className={s.cls3}
        cx="426"
        variants={background}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.1, delay: 0.6 }}
        cy="426"
        r="284"
      />
      <motion.circle
        key="_3"
        data-name="3"
        className={s.cls4}
        cx="426"
        variants={background}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.1, delay: 0.4 }}
        cy="426"
        r="213"
      />
      <motion.circle
        key="_2"
        data-name="2"
        className={s.cls5}
        cx="426"
        variants={background}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.1, delay: 0.2 }}
        cy="426"
        r="142"
      />
      <motion.circle
        key="_1"
        data-name="1"
        className={s.cls6}
        cx="426"
        variants={background}
        initial="hidden"
        transition={{ duration: 0.1, delay: 0 }}
        animate="show"
        cy="426"
        r="71"
      />
    </svg>
  );
};

export default HomeBackground;
