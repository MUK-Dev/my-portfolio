import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

import s from "./OnLoadAnimation.module.css";

const board = {
	exit: {
		y: "-100vh",
		transition: {
			ease: "easeInOut",
			duration: 0.8,
			delay: 1.5,
		},
	},
};

const right = {
	hidden: {
		x: "100vh",
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
	},
};

const left = {
	hidden: {
		x: "-100vh",
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
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
				exit="exit"
				key="animate-on-load"
				className={s.root}
			>
				<div className="row center-align">
					<motion.div
						variants={left}
						initial="hidden"
						animate="show"
						key="left"
						className="col s6"
						onAnimationComplete={stopAnimation}
					>
						<h1>*ON LOAD ANIMATION Illustration*</h1>
					</motion.div>
					<motion.div
						variants={right}
						initial="hidden"
						animate="show"
						exit="exit"
						key="right"
						className="col s6"
					>
						<h1>Greetings</h1>
					</motion.div>
				</div>
			</motion.div>
		)
	);
};

export default OnLoadAnimation;
