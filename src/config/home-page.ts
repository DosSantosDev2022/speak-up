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

export const feedbackData = [
	{
		id: 1,
		name: "Ana Clara S.",
		avatar: "/images/avatar-ana.webp", // Crie imagens de avatar na sua pasta public/images
		text: "A SpeakUp revolucionou meu aprendizado de inglês! As aulas são super dinâmicas e o suporte da IA é incrível. Sinto que meu inglês evoluiu muito rápido.",
		rating: 5,
	},
	{
		id: 2,
		name: "João Pedro L.",
		avatar: "/images/avatar-joao.webp",
		text: "Sempre tive dificuldade com inglês, mas com a flexibilidade de horários da SpeakUp, consigo estudar no meu ritmo. Os professores nativos fazem toda a diferença na pronúncia!",
		rating: 4,
	},
	{
		id: 3,
		name: "Maria Eduarda F.",
		avatar: "/images/avatar-maria.webp",
		text: "Preparei-me para o TOEFL com a SpeakUp e passei! O material é excelente e o foco em conversação me deu muita confiança. Recomendo a todos!",
		rating: 5,
	},
	{
		id: 4,
		name: "Carlos Alberto V.",
		avatar: "/images/avatar-carlos.webp",
		text: "As ferramentas de IA para correção são um diferencial. É como ter um professor particular 24h por dia. Meu vocabulário e gramática melhoraram drasticamente.",
		rating: 5,
	},
	{
		id: 5,
		name: "Sophia M.",
		avatar: "/images/avatar-sophia.webp",
		text: "Comecei a SpeakUp bem nova e me divirto aprendendo! As atividades são muito legais e interativas. É o melhor jeito de aprender inglês!",
		rating: 5,
	},
];
