// components/wave-background.tsx
import type React from "react";
import { twMerge } from "tailwind-merge";

interface WaveBackgroundProps {
	/**
	 * Cor de preenchimento da onda. Deve ser uma classe Tailwind de cor.
	 * Ex: "fill-[var(--background)]"
	 */
	fillColor?: string;
	/**
	 * Classe CSS adicional para o SVG.
	 */
	className?: string;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({
	fillColor = "fill-[var(--primary)]", // Cor padrão da onda
	className,
}) => {
	return (
		<div
			className={twMerge(
				"absolute bottom-0 left-0 w-full overflow-hidden",
				className,
			)}
		>
			{/** biome-ignore lint/a11y/noSvgWithoutTitle: O SVG é decorativo */}
			<svg
				data-slot="wave-svg"
				viewBox="0 0 1440 180" // Reduzi ainda mais a altura do viewBox para uma onda mais sutil
				preserveAspectRatio="none"
				className={twMerge(
					"block w-full h-auto",
					fillColor,
				)}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillOpacity="1"
					// Novo path para uma onda em forma de 'S' suave
					d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,85.3C1120,85,1280,117,1360,133.3L1440,149.3L1440,180L1360,180C1280,180,1120,180,960,180C800,180,640,180,480,180C320,180,160,180,80,180L0,180Z"
				></path>
			</svg>
		</div>
	);
};

export { WaveBackground };
