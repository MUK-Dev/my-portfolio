import { FC } from "react";

import SkillsView from "@components/common/viewTypes/SkillsView";

interface Props {
  count: number;
  skills: [{ skill: string }];
}

const FrontendSkillsView: FC<Props> = ({ count, skills }) => {
  return (
    <div>
      <SkillsView
        skills={skills}
        shouldAnimate={count === 1}
        type="A"
        title="Frontend Skills"
      />
    </div>
  );
};

export default FrontendSkillsView;
