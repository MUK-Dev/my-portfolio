import { FC, Ref, useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import s from "./ProjectsView.module.css";
import { Slide } from "@components/common/customElements";
import { motion, useAnimation } from "framer-motion";

export type Project = {
  title: string;
  description: string;
};

interface Props {
  projects: Project[];
  count: number;
}

const ProjectsView: FC<Props> = ({ projects, count }) => {
  const [pause, setPause] = useState(false);
  const timer = useRef<NodeJS.Timer>();
  const animation = useAnimation();
  const heading = useAnimation();

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 2,
    spacing: 15,
    loop: true,
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  useEffect(() => {
    if (count === 3) {
      animation.start({
        y: 0,
        opacity: 1,
      });
      heading.start({
        opacity: 1,
      });
    } else {
      animation.start({
        y: 20,
        opacity: 0,
      });
      heading.start({
        opacity: 0,
      });
    }
  }, [count]);

  return (
    <div className={s.root}>
      <motion.div animate={heading}>
        <h2>Experiences</h2>
        <span>*tap for details*</span>
      </motion.div>
      <motion.div
        animate={animation}
        transition={{ delay: 0.3 }}
        ref={sliderRef as Ref<HTMLDivElement>}
        className="keen-slider"
      >
        {projects.map((p, index) => {
          return (
            <div key={index} className="keen-slider__slide">
              <Slide title={p.title} description={p.description} />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectsView;
