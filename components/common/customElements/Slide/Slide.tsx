import { FC, useState } from "react";
import s from "./Slide.module.css";

interface Props {
  title: string;
  description: string;
}

const Slide: FC<Props> = ({ title, description }) => {
  const [showDetail, setShowDetail] = useState(false);
  const infoBoxClasses = [
    s.description,
    showDetail ? s.descriptionActive : null,
  ];

  return (
    <div
      className={`${s.root} valign-wrapper`}
      onClick={() => setShowDetail(!showDetail)}
    >
      <div
        className={infoBoxClasses.join(" ")}
        onClick={() => setShowDetail(!showDetail)}
      >
        <i className={`material-icons ${s.icon}`}>priority_high</i>
        <p>{description}</p>
      </div>
      <h2 className="center-block">{title}</h2>
    </div>
  );
};

export default Slide;
