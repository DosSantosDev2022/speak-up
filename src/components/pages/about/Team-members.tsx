import Image from "next/image";

// Dados de exemplo para membros da equipe (opcional)
const teamMembers = [
	{
		id: 1,
		name: "Dr. Ana Rodrigues",
		role: "Fundadora & CEO",
		image: "/images/ana-rodrigues.webp", // Crie estas imagens
		bio: "Com doutorado em linguística aplicada, Ana lidera a SpeakUp com a visão de tornar o inglês acessível a todos.",
	},
	{
		id: 2,
		name: "Prof. Marcos Silva",
		role: "Diretor Pedagógico",
		image: "/images/marcos-silva.webp",
		bio: "Com 20 anos de experiência, Marcos é o cérebro por trás da metodologia inovadora e eficaz da SpeakUp.",
	},
	{
		id: 3,
		name: "Sofia Almeida",
		role: "Chefe de Tecnologia",
		image: "/images/sofia-almeida.webp",
		bio: "Responsável por integrar as mais recentes tecnologias de IA para otimizar a experiência de aprendizado.",
	},
	{
		id: 4,
		name: "Lucas Costa",
		role: "Coordenador de Suporte ao Aluno",
		image: "/images/lucas-costa.webp",
		bio: "Lucas garante que cada estudante receba o apoio necessário para superar desafios e alcançar a fluência.",
	},
];

const TeamMembers = () => {
	return (
		<>
			{teamMembers.map((member) => (
				<div
					key={member.id}
					className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center"
				>
					<Image
						src={member.image}
						alt={member.name}
						width={120}
						height={120}
						className="rounded-full object-cover mb-4 border-4 border-secondary"
					/>
					<h3 className="text-xl font-semibold text-card-foreground mb-1">
						{member.name}
					</h3>
					<p className="text-muted-foreground text-sm font-bold mb-3">
						{member.role}
					</p>
					<p className="text-muted-foreground text-sm line-clamp-3">
						{member.bio}
					</p>
				</div>
			))}
		</>
	);
};

export { TeamMembers };
