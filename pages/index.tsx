import React, { useEffect, useState } from "react";

import s from "../styles/index.module.css";
import { OnLoadAnimation } from "@components/animations";
import { motion, AnimatePresence } from "framer-motion";

const home = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	},
};

export default function Home() {
	const [animation, stopAnimation] = useState(true);

	const body = animation ? (
		<motion.div
			key="animate-on-load"
			onAnimationComplete={() => stopAnimation(false)}
		>
			<OnLoadAnimation
				animation={animation}
				stopAnimation={() => stopAnimation(false)}
			/>
		</motion.div>
	) : (
		<motion.div variants={home} initial="hidden" animate="show">
			Home Page
		</motion.div>
	);

	return (
		<div className={s.root}>
			<AnimatePresence exitBeforeEnter>{body}</AnimatePresence>
		</div>
	);
}
