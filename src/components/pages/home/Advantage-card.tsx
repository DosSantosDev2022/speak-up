import type { LucideIcon } from "lucide-react";

interface AdvantageCardProps {
	icon: LucideIcon; // O tipo do ícone será um componente LucideIcon
	title: string;
	description: string;
}

const AdvantageCard = ({
	icon: Icon,
	title,
	description,
}: AdvantageCardProps) => {
	return (
		<div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm">
			{/* Contêiner do Ícone */}
			<div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-b to-primary from-secondary text-primary-foreground">
				<Icon size={28} />{" "}
				{/* Renderiza o ícone passado como prop */}
			</div>
			{/* Conteúdo do Card (Título e Descrição) */}
			<div>
				<h3 className="text-xl font-semibold text-card-foreground mb-2">
					{title}
				</h3>
				<p className="text-muted-foreground leading-relaxed line-clamp-3">
					{description}
				</p>
			</div>
		</div>
	);
};

export { AdvantageCard };
