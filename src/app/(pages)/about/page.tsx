import {
	AnimationContainer,
	Container,
	TeamMembers,
	WaveBackground,
} from "@/components";

export default function AboutPage() {
	return (
		<>
			{/* Seção Hero "Sobre Nós" */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[30vh] md:min-h-[70vh]">
				<AnimationContainer
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "backInOut" }}
					viewport={{ once: true, amount: 0.5 }}
				>
					<Container className="z-10">
						<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-7xl mb-4">
							Sobre a SpeakUp
						</h1>
						<p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
							Nossa paixão é transformar vidas através do
							aprendizado de inglês, oferecendo uma educação
							inovadora e acessível para todos.
						</p>
					</Container>
				</AnimationContainer>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção Nossa Missão e Visão */}
			<section className="py-20 px-4 md:px-8 lg:px-16 my-32">
				<Container className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
					<AnimationContainer
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="w-full md:w-1/2 text-center"
					>
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
					</AnimationContainer>
					<AnimationContainer
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="w-full md:w-1/2 text-center mt-8 md:mt-0"
					>
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
					</AnimationContainer>
				</Container>
			</section>

			{/* Seção Nossa História (Exemplo de Timeline simplificada) */}
			<section className="bg-muted py-20 px-4 md:px-8 lg:px-0">
				<Container className="text-center">
					<AnimationContainer>
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
							Nossa{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Jornada
							</span>
						</h2>
					</AnimationContainer>

					<div className="flex flex-col items-center space-y-12">
						<div className="relative w-full max-w-2xl">
							<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full"></div>

							{/* Ponto 1 */}
							<AnimationContainer
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.5,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="flex flex-col md:flex-row items-center justify-center w-full relative"
							>
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
							</AnimationContainer>

							{/* Ponto 2 */}
							<AnimationContainer
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.6,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="flex flex-col md:flex-row items-center justify-center w-full relative mt-12"
							>
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
							</AnimationContainer>

							{/* Ponto 3 */}
							<AnimationContainer
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.7,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="flex flex-col md:flex-row items-center justify-center w-full relative mt-12"
							>
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
							</AnimationContainer>

							{/* Ponto 4 - Último ponto da timeline, para ter um fim */}
							<AnimationContainer
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.8,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="flex flex-col md:flex-row items-center justify-center w-full relative mt-12"
							>
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
							</AnimationContainer>
						</div>
					</div>
				</Container>
			</section>

			{/* Seção Conheça Nossa Equipe */}
			<section className="py-20 px-4 md:px-8 lg:px-16">
				<Container className="text-center">
					<AnimationContainer
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.8,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
							Conheça Nossa{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Equipe
							</span>
						</h2>
					</AnimationContainer>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<TeamMembers />
					</div>
				</Container>
			</section>
		</>
	);
}
