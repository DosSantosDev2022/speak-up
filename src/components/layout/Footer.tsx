import {
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
} from "lucide-react"; // Importe os ícones das redes sociais
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	// Dados para as colunas de links
	const navLinks = [
		{
			title: "SpeakUp",
			links: [
				{ name: "Sobre Nós", href: "/sobre" },
				{ name: "Professores", href: "/professores" },
				{ name: "Metodologia", href: "/metodologia" },
				{ name: "Depoimentos", href: "/depoimentos" },
			],
		},
		{
			title: "Cursos",
			links: [
				{
					name: "Inglês para Crianças",
					href: "/cursos/criancas",
				},
				{
					name: "Inglês para Adolescentes",
					href: "/cursos/adolescentes",
				},
				{
					name: "Inglês para Adultos",
					href: "/cursos/adultos",
				},
				{
					name: "Preparatório TOEFL/IELTS",
					href: "/cursos/toefl-ielts",
				},
			],
		},
		{
			title: "Suporte",
			links: [
				{ name: "FAQ", href: "/faq" },
				{ name: "Contato", href: "/contato" },
				{
					name: "Política de Privacidade",
					href: "/politica-privacidade",
				},
				{ name: "Termos de Uso", href: "/termos-uso" },
			],
		},
	];

	// Dados para as redes sociais
	const socialLinks = [
		{
			name: "Facebook",
			icon: Facebook,
			href: "https://facebook.com/speakup",
		},
		{
			name: "Instagram",
			icon: Instagram,
			href: "https://instagram.com/speakup",
		},
		{
			name: "YouTube",
			icon: Youtube,
			href: "https://youtube.com/speakup",
		},
	];

	return (
		<footer className="py-16 px-4 md:px-8 lg:px-16">
			<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
				<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 lg:gap-20">
					{/* Coluna da Logo */}
					<div className="flex-shrink-0 text-center md:text-left mb-8 md:mb-0">
						<Link href="/" className="inline-block">
							<Image
								src="/images/logo.webp" // Certifique-se de que sua logo está aqui
								alt="SpeakUp Logo"
								width={150}
								height={40}
								quality={100}
								className="h-auto max-w-full"
							/>
						</Link>
						<p className="mt-4 text-sm max-w-xs mx-auto md:mx-0">
							Sua jornada online rumo à fluência no inglês
							começa aqui.
						</p>
					</div>

					{/* Colunas de Navegação */}
					<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 flex-grow justify-items-center md:justify-items-start">
						{navLinks.map((section) => (
							<div
								key={section.title}
								className="text-center md:text-left"
							>
								<h4 className="text-lg font-semibold mb-4 ">
									{section.title}
								</h4>
								<ul className="space-y-2">
									{section.links.map((link) => (
										<li key={link.name}>
											<Link
												href={link.href}
												className="hover:text-primary transition-colors duration-200 text-sm"
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* Coluna de Redes Sociais */}
					<div className="w-full md:w-auto text-center md:text-left">
						<h4 className="text-lg font-semibold mb-4">
							Conecte-se
						</h4>
						<div className="flex justify-center md:justify-start gap-4">
							{socialLinks.map((social) => (
								<Link
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.name}
									className="hover:bg-gradient-to-b hover:to-primary hover:from-secondary/70 hover:text-primary-foreground hover:scale-95 transition-colors duration-300 border rounded-full p-2 border-muted shadow"
								>
									<social.icon size={24} />
								</Link>
							))}
						</div>
					</div>
				</div>

				{/* Direitos Autorais */}
				<div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm">
					&copy; {new Date().getFullYear()} SpeakUp. Todos
					os direitos reservados.
				</div>
			</div>
		</footer>
	);
};

export { Footer };
