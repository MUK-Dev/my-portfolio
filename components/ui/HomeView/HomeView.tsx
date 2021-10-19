import { motion } from "framer-motion";

import s from "./HomeView.module.css";

const fadeIn = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

const hr = {
  hidden: {
    width: 0,
  },
  show: {
    width: 130,
  },
};

const HomeView = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      transition={{ delay: 1 }}
      className={`row ${s.root}`}
    >
      <div className="col s12 m6 center-align">
        <h1>M. Usman Khiji</h1>
        <motion.hr
          variants={hr}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.4 }}
        />
        <p>
          <b>Full Stack Dev.</b> <br />
          With Some Soft Skills Sprinkled On Top
        </p>
      </div>
    </motion.div>
  );
};

export default HomeView;
