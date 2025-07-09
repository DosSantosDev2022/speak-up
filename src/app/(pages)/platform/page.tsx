// biome-ignore assist/source/organizeImports: <explanation>
import {
	AnimationContainer,
	Container,
	WaveBackground,
} from "@/components";
import Image from "next/image";

// Importando os ícones que vamos usar
import {
	FaLaptopCode,
	FaUsers,
	FaChartLine,
	FaMobileAlt,
	FaChalkboardTeacher,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi"; // Exemplo de outro pacote, se necessário

const features = [
	{
		icon: FaLaptopCode, // Agora é o componente do ícone
		title: "Aulas Interativas",
		description:
			"Participe de aulas dinâmicas com exercícios práticos e feedback instantâneo para um aprendizado eficaz.",
	},
	{
		icon: GiArtificialIntelligence, // Componente do ícone
		title: "IA no Seu Aprendizado",
		description:
			"Utilize o poder da inteligência artificial para personalizar seu caminho de estudo e otimizar sua pronúncia.",
	},
	{
		icon: FaUsers, // Componente do ícone
		title: "Comunidade Ativa",
		description:
			"Conecte-se com outros estudantes, pratique conversação e tire suas dúvidas em nossa comunidade exclusiva.",
	},
	{
		icon: FaChartLine, // Componente do ícone
		title: "Acompanhamento de Progresso",
		description:
			"Monitore seu avanço com relatórios detalhados e metas personalizadas para se manter motivado.",
	},
	{
		icon: FaMobileAlt, // Componente do ícone
		title: "Aprendizado Flexível",
		description:
			"Estude no seu próprio ritmo, a qualquer hora e em qualquer lugar, com acesso multiplataforma.",
	},
	{
		icon: FaChalkboardTeacher, // Componente do ícone
		title: "Professores Certificados",
		description:
			"Tenha suporte de professores qualificados prontos para te ajudar a alcançar a fluência.",
	},
];

export default function PlatformPage() {
	return (
		<>
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[35vh]: md:min-h-[70vh]">
				<Container className="z-10">
					<AnimationContainer
						initial={{ opacity: 0, y: 50 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
							Plataforma SpeakUp
						</h1>
						<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
							Descubra um ambiente de aprendizado intuitivo
							e completo, desenvolvido para impulsionar sua
							fluência no inglês de forma prática e eficaz.
						</p>
					</AnimationContainer>
					<WaveBackground
						className="z-0"
						fillColor="fill-background"
					/>
				</Container>
			</section>

			<section className="py-20">
				<Container className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16">
					<AnimationContainer
						initial={{ opacity: 0, y: 50 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="max-w-2xl w-full text-center md:text-left md:w-1/2"
					>
						<h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
							Uma plataforma{" "}
							<span className="bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								tecnológica
							</span>{" "}
							feita para você!
						</h2>
						<p className="mt-4 text-lg sm:text-xl text-muted-foreground">
							Descubra um ambiente de aprendizado intuitivo
							e completo, desenvolvido para impulsionar sua
							fluência no inglês de forma prática e eficaz.
						</p>
					</AnimationContainer>

					<AnimationContainer
						initial={{ opacity: 0, y: 50 }}
						transition={{
							duration: 0.8,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="w-full md:w-1/2 flex justify-center"
					>
						<Image
							src={"/images/platform.webp"}
							alt="Imagem da plataforma SpeakUp"
							width={800}
							height={800}
							quality={100}
							className="w-full h-auto object-contain rounded-lg shadow-lg max-w-full"
						/>
					</AnimationContainer>
				</Container>
			</section>

			<section className="py-20 px-4 md:px-8 lg:px-16 bg-muted-foreground/5">
				<Container className="text-center">
					<AnimationContainer
						initial={{ opacity: 0, y: 50 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						<h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-4">
							Recursos{" "}
							<span className="bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Inovadores
							</span>
						</h2>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
							Explore as funcionalidades que tornam o
							aprendizado de inglês com a SpeakUp uma
							experiência única e completa.
						</p>
					</AnimationContainer>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => {
							const IconComponent = feature.icon; // Pega o componente do ícone
							return (
								<AnimationContainer
									key={feature.title}
									initial={{ opacity: 0, y: 50 }}
									transition={{
										duration: 0.7,
										delay: index * 0.1,
										ease: "backInOut",
									}}
									viewport={{ once: true, amount: 0.3 }}
								>
									<div className="bg-card text-card-foreground  gap-6 rounded-xl border py-6 shadow-sm h-full flex flex-col p-6 items-center justify-center text-center">
										{/* Renderiza o componente do ícone com classes Tailwind */}
										<IconComponent className="w-16 h-16 text-primary mb-4" />
										<div className="w-full ">
											<h2 className="text-xl font-semibold mb-2">
												{feature.title}
											</h2>
										</div>
										<div className="px-6">
											<p className="text-muted-foreground text-sm">
												{feature.description}
											</p>
										</div>
									</div>
								</AnimationContainer>
							);
						})}
					</div>
				</Container>
			</section>
		</>
	);
}
