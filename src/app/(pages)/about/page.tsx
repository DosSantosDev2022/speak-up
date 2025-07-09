import { TeamMembers, WaveBackground } from "@/components";

export default function AboutPage() {
	return (
		<>
			{/* Seção Hero "Sobre Nós" */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[60vh]">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 z-10">
					<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-7xl mb-4">
						Sobre a{" "}
						<span className="text-secondary-foreground">
							SpeakUp
						</span>
					</h1>
					<p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
						Nossa paixão é transformar vidas através do
						aprendizado de inglês, oferecendo uma educação
						inovadora e acessível para todos.
					</p>
				</div>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção Nossa Missão e Visão */}
			<section className="bg-background text-foreground py-20 px-4 md:px-8 lg:px-16">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
					<div className="w-full md:w-1/2 text-center">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
							Nossa{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Missão
							</span>
						</h2>
						<p className="text-lg sm:text-xl leading-relaxed">
							Capacitar pessoas de todas as idades a se
							comunicarem em inglês com confiança e
							fluência, utilizando tecnologia de ponta e
							metodologias de ensino inovadoras que se
							adaptam às necessidades individuais de cada
							aluno.
						</p>
					</div>
					<div className="w-full md:w-1/2 text-center mt-8 md:mt-0">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
							Nossa{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Visão
							</span>
						</h2>
						<p className="text-lg sm:text-xl leading-relaxed">
							Ser reconhecida globalmente como a plataforma
							líder em aprendizado de inglês online,
							transformando o acesso à educação de qualidade
							e abrindo portas para oportunidades ilimitadas
							em um mundo conectado.
						</p>
					</div>
				</div>
			</section>

			{/* Seção Nossa História (Exemplo de Timeline simplificada) */}
			<section className="bg-muted text-foreground py-20 px-4 md:px-8 lg:px-16">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 text-center">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
						Nossa{" "}
						<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
							Jornada
						</span>
					</h2>
					<div className="flex flex-col items-center space-y-12">
						<div className="relative w-full max-w-2xl">
							<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full"></div>

							{/* Ponto 1 */}
							<div className="flex flex-col md:flex-row items-center justify-center w-full relative">
								<div className="hidden md:block w-1/2"></div>{" "}
								{/* Espaçador */}
								<div className="z-10 bg-gradient-to-b from-secondary to-primary w-6 h-6 rounded-full absolute md:left-1/2 md:-translate-x-1/2 -top-3" />
								<div className="w-full md:w-1/2 p-6 rounded-lg shadow-md bg-card text-card-foreground text-left md:text-right md:pr-12 md:mr-6">
									<h3 className="text-xl font-bold mb-2">
										2018 - Fundação
									</h3>
									<p className="text-muted-foreground text-sm">
										A SpeakUp nasce da paixão de um grupo de
										educadores e tecnólogos por um ensino de
										inglês de alta qualidade e acessível.
									</p>
								</div>
							</div>

							{/* Ponto 2 */}
							<div className="flex flex-col md:flex-row items-center justify-center w-full relative mt-12">
								<div className="w-full md:w-1/2 p-6 rounded-lg shadow-md bg-card text-card-foreground text-left md:text-left md:pl-12 md:ml-6 order-2 md:order-1">
									<h3 className="text-xl font-bold mb-2">
										2020 - Lançamento da Plataforma
									</h3>
									<p className="text-muted-foreground text-sm">
										Com a pandemia, a demanda por ensino
										online acelera o lançamento de nossa
										plataforma interativa com IA.
									</p>
								</div>
								<div className="z-10 bg-gradient-to-b from-secondary to-primary w-6 h-6 rounded-full absolute md:left-1/2 md:-translate-x-1/2 -top-3" />
								<div className="hidden md:block w-1/2 order-3"></div>
							</div>

							{/* Ponto 3 */}
							<div className="flex flex-col md:flex-row items-center justify-center w-full relative mt-12">
								<div className="hidden md:block w-1/2"></div>
								<div className="z-10 bg-gradient-to-b from-secondary to-primary w-6 h-6 rounded-full absolute md:left-1/2 md:-translate-x-1/2 -top-3" />
								<div className="w-full md:w-1/2 p-6 rounded-lg shadow-md bg-card text-card-foreground text-left md:text-right md:pr-12 md:mr-6">
									<h3 className="text-xl font-bold mb-2">
										2023 - Expansão Global
									</h3>
									<p className="text-muted-foreground text-sm">
										Atingimos mais de X mil alunos em Y
										países, consolidando nossa presença
										internacional.
									</p>
								</div>
							</div>

							{/* Ponto 4 - Último ponto da timeline, para ter um fim */}
							<div className="flex flex-col md:flex-row items-center justify-center w-full relative mt-12">
								<div className="w-full md:w-1/2 p-6 rounded-lg shadow-md bg-card text-card-foreground text-left md:text-left md:pl-12 md:ml-6 order-2 md:order-1">
									<h3 className="text-xl font-bold mb-2">
										Hoje - Inovação Contínua
									</h3>
									<p className="text-muted-foreground text-sm">
										Continuamos a inovar, trazendo novas
										ferramentas e recursos para aprimorar a
										experiência de aprendizado.
									</p>
								</div>
								<div className="z-10 bg-gradient-to-b from-secondary to-primary w-6 h-6 rounded-full absolute md:left-1/2 md:-translate-x-1/2 -top-3" />
								<div className="hidden md:block w-1/2 order-3"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Seção Conheça Nossa Equipe (Exemplo de Grid de Fotos) */}
			<section className="bg-background text-foreground py-20 px-4 md:px-8 lg:px-16">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 text-center">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
						Conheça Nossa{" "}
						<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
							Equipe
						</span>
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<TeamMembers />
					</div>
				</div>
			</section>
		</>
	);
}
