// app/page.tsx

// biome-ignore assist/source/organizeImports: <explanation>
import { CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, WaveBackground } from "@/components"; // Importe o componente de onda
import {
	advantages,
	audienceCategories,
} from "@/config/home-page";
import { AdvantageCard } from "@/components/pages/home/Advantage-card";
import { AudienceCard } from "@/components/pages/home/Audience-card";

export default function HomePage() {
	return (
		<>
			{/* Seção Hero - Contêiner principal com background e onda */}
			<section className="relative pt-4 pb-4 md:pb-20 bg-primary text-primary-foreground overflow-hidden min-h-[calc(100vh - var(--header-total-height))] flex items-center justify-center">
				{/* CONTAINER para alinhar o conteúdo da Hero com o Header */}
				<div className="container mx-auto mb-12 px-4 sm:px-6 md:px-8 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
					{/* Bloco de Conteúdo (Título, Descrição, Botões, Estatísticas) */}
					<div className="flex-1 max-w-full md:max-w-2xl text-center md:text-left z-10">
						<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl mb-4">
							Embarque em uma jornada online rumo à fluência
							no inglês!
						</h1>
						<p className="mt-4 text-lg sm:text-xl">
							Explore uma didática e ferramentas inovadoras
							que impulsionarão seu avanço linguístico.
							Descubra o poder transformador da SpeakUp e
							abra portas para um futuro brilhante e repleto
							de oportunidades!
						</p>

						{/* Grupo de Botões */}
						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
							<Button
								size={"lg"}
								className="bg-muted text-foreground hover:bg-secondary w-full rounded-4xl sm:w-auto"
								asChild
							>
								<Link href="/#">Pré-Matrícula</Link>
							</Button>
							<Button
								size={"lg"}
								variant="secondary"
								className="w-full sm:w-auto rounded-4xl"
								asChild
							>
								<Link
									href="/#"
									className="flex items-center justify-center gap-2"
								>
									<CirclePlay className="text-secondary-foreground" />
									Veja como funciona
								</Link>
							</Button>
						</div>

						{/* Bloco da Imagem de Ícones e Estatísticas */}
						<div className="mt-2 flex flex-col sm:flex-row  items-center justify-center md:justify-start gap-6 sm:gap-8 p-4">
							<Image
								src={"/images/icons.webp"}
								alt="Ilustração de estudantes de inglês"
								width={100}
								height={100}
								quality={100}
								className="max-w-full h-auto"
							/>
							{/* Seções de Estatísticas */}
							<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-8 mt-4 sm:mt-0">
								{/* Seção de Estudantes Conectados */}
								<div className="flex flex-col items-center text-center">
									<span className="text-2xl font-bold">
										4.359
									</span>
									<span className="text-sm mt-1">
										Estudantes Conectados
									</span>
								</div>

								{/* Divisor Vertical */}
								<div
									className="hidden sm:block h-16 w-px bg-primary-foreground"
									aria-hidden="true"
								/>

								{/* Seção de Avaliações */}
								<div className="flex flex-col items-center text-center">
									<span className="text-2xl font-bold">
										4.8/5
									</span>
									<span className="text-sm flex items-center justify-center gap-1">
										<span className="text-yellow-400 text-xl">
											★★★★★
										</span>
										Avaliações
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Imagem do estudante */}
					<div className="relative bottom-0 right-0 w-[80%] md:w-[40%] lg:w-[35%] xl:w-[30%] h-auto z-10">
						<Image
							src={"/images/student-hero.webp"}
							alt="Imagem de estudante de inglês"
							width={700}
							height={700}
							quality={100}
							className="w-full h-auto object-cover"
						/>
						{/* Elemento de sobreposição com gradiente para o efeito de "desaparecer" */}
						<div
							className="absolute inset-x-0 bottom-0 h-18"
							style={{
								background:
									"linear-gradient(to top, var(--primary) 0%, transparent 100%)",
							}}
							aria-hidden="true"
						></div>
					</div>
				</div>

				{/* Onda de Fundo - Posicionada no final da seção Hero */}
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção vantagens exclusivas */}
			<section className="bg-background text-foreground py-20 px-4 md:px-8 lg:px-16">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
					<div className="w-full md:w-4xl space-y-4 text-center md:text-left">
						<h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
							Descubra as{" "}
							<span className="font-bold text-primary">
								vantagens
							</span>{" "}
							exclusivas do SpeakUp
						</h2>
						<Link
							className="inline-block border border-secondary text-secondary rounded-4xl px-4 py-2 hover:bg-secondary hover:text-primary-foreground transition-colors duration-300"
							href={"/#"}
						>
							Ver todas as vantagens
						</Link>
					</div>

					<div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
						<p className="text-lg sm:text-xl leading-relaxed">
							Transforme sua jornada de aprendizado com
							recursos de primeira classe e suporte
							personalizado.
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					{advantages.map((advantage) => (
						<AdvantageCard
							key={advantage.id}
							icon={advantage.icon}
							title={advantage.title}
							description={advantage.description}
						/>
					))}
				</div>
			</section>

			{/* Seção "Encontre o melhor caminho para aprender inglês!" */}
			<section className="bg-background text-foreground py-20 px-4 md:px-8 lg:px-16">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
					{/* Título - Aparece primeiro em mobile */}
					<div className="max-w-2xl w-full text-center md:text-left">
						<h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
							Encontre o melhor{" "}
							<span className="text-primary">caminho</span>{" "}
							para aprender inglês!
						</h2>
					</div>

					{/* Botão "Saiba mais!" - Aparece segundo em mobile, alinhado à direita em desktop */}
					<div className="w-full md:w-auto flex justify-center md:justify-end">
						<Link
							className="inline-block border border-secondary text-secondary rounded-4xl px-6 py-3 hover:bg-secondary hover:text-primary-foreground transition-colors duration-300 text-lg"
							href={"/#"}
						>
							Saiba mais!
						</Link>
					</div>
				</div>

				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 mt-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{audienceCategories.map((audience) => (
							<AudienceCard
								key={audience.title}
								imageSrc={audience.imageSrc}
								title={audience.title}
								description={audience.description}
								linkHref={audience.linkHref}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
