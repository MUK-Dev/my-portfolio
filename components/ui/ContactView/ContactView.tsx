import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { ContactForm } from '@components/common/customElements';
import { Laptop } from '@components/common/Illustrations';
import s from './ContactView.module.css';

interface Props {
  count: number;
}

const ContactView: FC<Props> = ({ count }) => {
  const animation = useAnimation();

  useEffect(() => {
    if (count === 4) {
      animation.start({
        y: 0,
        scale: 1,
      });
    } else {
      animation.start({
        y: 200,
        scale: 0,
      });
    }
  }, [count]);

  return (
    <motion.div animate={animation} className={`valign-wrapper ${s.root}`}>
      <div>
        <ContactForm />
      </div>
      <div>
        <Laptop />
      </div>
    </motion.div>
  );
};

export default ContactView;
