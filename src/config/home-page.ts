import {
	Award,
	BookOpen,
	Brain,
	Clock,
	GraduationCap,
	IndianRupee,
} from "lucide-react";

/* Dados para cards da seção vantagens */
export const advantages = [
	{
		icon: GraduationCap,
		id: "advantage-01",
		title: "Aprendizado Personalizado",
		description:
			"Currículo adaptado ao seu ritmo e objetivos, garantindo progresso contínuo e eficaz.",
	},
	{
		id: "advantage-02",
		icon: Clock,
		title: "Flexibilidade de Horários",
		description:
			"Estude quando e onde quiser, com aulas disponíveis 24 horas por dia, 7 dias por semana.",
	},
	{
		id: "advantage-03",
		icon: Brain,
		title: "Suporte Personalizado da IA",
		description:
			"Ferramentas de IA que auxiliam na prática, correção e aprimoramento da sua fala e escrita.",
	},
	{
		id: "advantage-04",
		icon: Award,
		title: "Certificação Internacional",
		description:
			"Receba um certificado reconhecido globalmente ao concluir seu curso na SpeakUp.",
	},
	{
		id: "advantage-05",
		icon: IndianRupee,
		title: "Professores Nativos",
		description:
			"Aprenda com falantes nativos do inglês, aprimorando pronúncia e imersão cultural.",
	},
	{
		id: "advantage-06",
		icon: BookOpen,
		title: "Preparatório TOEFL/IELTS",
		description:
			"Cursos específicos para você se preparar e obter sucesso nos exames de proficiência.",
	},
];

export const audienceCategories = [
	{
		imageSrc: "/images/infantil.webp", // Ajuste os caminhos das imagens
		title: "Público Infantil",
		description:
			"Aulas lúdicas e interativas, perfeitas para as crianças darem os primeiros passos no inglês de forma divertida e eficaz.",
		linkHref: "#",
	},
	{
		imageSrc: "/images/preadolescente.webp",
		title: "Pré-adolescente",
		description:
			"Conteúdo dinâmico e relevante para pré-adolescentes, focando em comunicação e desafios apropriados para a idade.",
		linkHref: "#",
	},
	{
		imageSrc: "/images/adolescente.webp",
		title: "Adolescente",
		description:
			"Metodologia engajadora para adolescentes, preparando-os para o mundo acadêmico e social com inglês fluente.",
		linkHref: "#",
	},
	{
		imageSrc: "/images/adulto.webp",
		title: "Adulto",
		description:
			"Cursos flexíveis e focados em resultados para adultos, seja para carreira, viagens ou desenvolvimento pessoal.",
		linkHref: "#",
	},
];
