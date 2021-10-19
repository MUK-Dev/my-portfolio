import { FC } from "react";

import SkillsView from "@components/common/viewTypes/SkillsView";

interface Props {
  count: number;
  skills: string[];
}

const BackendSkillsView: FC<Props> = ({ count, skills }) => {
  return (
    <div>
      <SkillsView
        skills={skills}
        shouldAnimate={count === 2}
        type="B"
        title="Backend Skills"
      />
    </div>
  );
};

export default BackendSkillsView;
