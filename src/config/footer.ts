import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa"; // Importe os ícones das redes sociais

// Dados para as colunas de links
const navLinks = [
	{
		title: "SpeakUp",
		links: [
			{ name: "Sobre Nós", href: "/about" },
			{ name: "Professores", href: "/teachers" },
			{ name: "Metodologia", href: "/methodology" },
			{ name: "Depoimentos", href: "/testimonials" },
		],
	},
	{
		title: "Cursos",
		links: [
			{
				name: "Inglês para Crianças",
				href: "/#",
			},
			{
				name: "Inglês para Adolescentes",
				href: "/#",
			},
			{
				name: "Inglês para Adultos",
				href: "/#",
			},
			{
				name: "Preparatório TOEFL/IELTS",
				href: "/#",
			},
		],
	},
	{
		title: "Suporte",
		links: [
			{ name: "FAQ", href: "/faq" },
			{ name: "Contato", href: "/#" },
			{
				name: "Política de Privacidade",
				href: "/#",
			},
			{ name: "Termos de Uso", href: "/#" },
		],
	},
];

// Dados para as redes sociais
const socialLinks = [
	{
		name: "Facebook",
		icon: FaFacebook,
		href: "#",
	},
	{
		name: "Instagram",
		icon: FaInstagram,
		href: "#",
	},
	{
		name: "YouTube",
		icon: FaYoutube,
		href: "#",
	},
];

export { navLinks, socialLinks };
