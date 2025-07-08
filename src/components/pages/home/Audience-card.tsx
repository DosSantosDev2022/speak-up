import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/"; // Assumindo que você tem um componente Button no seu projeto

interface AudienceCardProps {
	imageSrc: string;
	title: string;
	description: string;
	linkHref: string;
}

const AudienceCard = ({
	imageSrc,
	title,
	description,
	linkHref,
}: AudienceCardProps) => {
	return (
		<div className="flex flex-col bg-card rounded-lg shadow-lg overflow-hidden h-full">
			{/* Imagem do Card */}
			<div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
				<Image
					src={imageSrc}
					alt={title}
					fill
					style={{ objectFit: "cover" }}
					className="transition-transform duration-300 hover:scale-105"
				/>
			</div>

			{/* Conteúdo do Card */}
			<div className="p-6 flex flex-col justify-between flex-grow">
				<div>
					<h3 className="text-2xl font-bold text-card-foreground mb-3 leading-tight">
						{title}
					</h3>
					<p className="text-muted-foreground text-base mb-4 line-clamp-4">
						{description}
					</p>
				</div>
				{/* Botão de Link */}
				<Button
					asChild
					className="w-full mt-4 rounded-full bg-gradient-to-b to-primary from-secondary/70 hover:scale-95 duration-300"
				>
					<Link href={linkHref}>Saiba mais</Link>
				</Button>
			</div>
		</div>
	);
};

export { AudienceCard };
