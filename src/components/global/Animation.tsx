"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import type React from "react";

interface AnimationContainerProps
	extends HTMLMotionProps<"div"> {
	// `children` é o que será renderizado dentro do nosso motion.div
	children: React.ReactNode;
}

const AnimationContainer: React.FC<
	AnimationContainerProps
> = ({
	children,
	initial = { opacity: 0, y: 20 },
	whileInView = { opacity: 1, y: 0 },
	transition = { duration: 0.6, ease: "easeIn" },
	viewport = { once: true, amount: 0.5 },
	...rest
}) => {
	return (
		<motion.div
			initial={initial}
			whileInView={whileInView}
			transition={transition}
			{...rest} // Propaga todas as outras props para o motion.div
		>
			{children} {/* Renderiza os filhos aqui */}
		</motion.div>
	);
};

export { AnimationContainer };
