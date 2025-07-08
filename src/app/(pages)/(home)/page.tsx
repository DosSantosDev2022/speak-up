// app/page.tsx

import { CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, WaveBackground } from "@/components"; // Importe o componente de onda

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

			{/* Exemplo de outras seções da página, fora da Hero */}
			<section className="bg-[var(--background)] text-foreground py-20 px-4 md:px-8 lg:px-16">
				<h2 className="text-3xl font-bold text-center mb-8">
					Nossos Diferenciais
				</h2>
				<p className="max-w-3xl mx-auto text-center">
					Descubra os pilares que tornam a SpeakUp a escolha
					ideal para sua jornada no inglês. Metodologia
					inovadora, professores experientes e uma
					comunidade engajada esperam por você.
				</p>
			</section>
		</>
	);
}
