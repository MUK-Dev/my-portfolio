import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';

import s from './SkillsView.module.css';

const heading = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const list = {
  hidden: {
    x: 80,
    y: 20,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

interface Props {
  skills: [{ skill: string }];
  type?: 'A' | 'B';
  title: string;
  shouldAnimate: boolean;
}

const SkillsView: FC<Props> = ({
  skills,
  type = 'A',
  title,
  shouldAnimate,
}) => {
  const animation = useAnimation();
  const heading = useAnimation();

  useEffect(() => {
    if (shouldAnimate) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
      });
      heading.start({
        x: 0,
        opacity: 1,
      });
    }
    if (!shouldAnimate) {
      animation.start({
        x: type === 'A' ? 80 : -80,
        y: 20,
        opacity: 0,
      });
      heading.start({
        x: type === 'A' ? -40 : 40,
        opacity: 0,
      });
    }
  }, [shouldAnimate]);

  const leftColumn =
    type === 'A' ? (
      <div className='col s12 l6 center-align'>
        <motion.h1 animate={heading} transition={{ duration: 0.7 }}>
          {title}
        </motion.h1>
      </div>
    ) : (
      <div className={`col s12 m6 ${s.leftList}`}>
        <ul>
          {skills.map((s, index) => {
            return (
              <motion.li
                animate={animation}
                transition={{
                  delay: shouldAnimate ? index * 0.1 : 0,
                  type: 'spring',
                  bounce: 0.5,
                }}
                key={s.skill}
              >
                {s.skill}
              </motion.li>
            );
          })}
        </ul>
      </div>
    );

  const rightColumn =
    type === 'A' ? (
      <div className='col s12 l6'>
        <ul>
          {skills.map((s, index) => {
            return (
              <motion.li
                animate={animation}
                transition={{
                  delay: shouldAnimate ? index * 0.1 : 0,
                  type: 'spring',
                  bounce: 0.5,
                }}
                key={s.skill}
              >
                {s.skill}
              </motion.li>
            );
          })}
        </ul>
      </div>
    ) : (
      <div className='col s12 m6 center-align'>
        <motion.h1 animate={heading} transition={{ duration: 0.7 }}>
          {title}
        </motion.h1>
      </div>
    );

  return (
    <div className={`row valign-wrapper ${s.root}`}>
      {leftColumn}
      {rightColumn}
    </div>
  );
};

export default SkillsView;
