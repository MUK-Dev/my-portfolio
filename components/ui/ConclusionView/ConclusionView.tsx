import { FC, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

import s from './ConclusionView.module.css';
import { Fire } from '@components/common/Illustrations';

interface Props {
  count: number;
}

const ConclusionView: FC<Props> = ({ count }) => {
  const animation = useAnimation();
  const fire = useAnimation();

  useEffect(() => {
    if (count === 5) {
      animation.start({
        scale: 1,
      });
      fire.start({
        y: 0,
      });
    } else {
      animation.start({
        scale: 0,
      });
      fire.start({
        y: '100vh',
      });
    }
  }, [count]);

  return (
    <div className={`valign-wrapper ${s.root}`}>
      <motion.h1 animate={animation} className='center-block'>
        THANK YOU
      </motion.h1>
      <motion.div animate={fire} transition={{ bounce: 0 }} className={s.fire}>
        <Fire />
      </motion.div>
    </div>
  );
};

export default ConclusionView;
