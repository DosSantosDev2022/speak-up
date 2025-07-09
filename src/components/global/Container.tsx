// src/components/Container.tsx
import type React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

const Container = ({
	children,
	className,
	...props
}: ContainerProps) => {
	return (
		<div
			className={cn(
				"container mx-auto px-4 sm:px-6 md:px-8 lg:px-28", // Classes padrão do seu container
				className, // Permite adicionar ou sobrescrever classes via props
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export { Container };
