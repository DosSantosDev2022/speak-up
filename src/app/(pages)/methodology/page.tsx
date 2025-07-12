// app/metodologia/page.tsx
import {
	AnimationContainer,
	Container,
	WaveBackground,
} from "@/components";
import { methodologyPillars } from "@/config/methodology";

export default function MetodologiaPage() {
	return (
		<>
			{/* Seção Hero "Nossa Metodologia" */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[30vh] md:min-h-[70vh]">
				<AnimationContainer
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "backInOut" }}
					viewport={{ once: true, amount: 0.5 }}
				>
					<Container className="z-10">
						<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-7xl mb-4">
							Nossa Metodologia
						</h1>
						<p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
							Descubra como nossa abordagem inovadora
							transforma o aprendizado de inglês em uma
							experiência eficaz e envolvente.
						</p>
					</Container>
				</AnimationContainer>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção de Pilares da Metodologia */}
			<section className="py-20 px-4 md:px-8 lg:px-16 my-16">
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
							Pilares do Nosso{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Ensino
							</span>
						</h2>
					</AnimationContainer>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
						{methodologyPillars.map((pillar, index) => (
							<AnimationContainer
								key={pillar.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.1 * index,
									duration: 0.6,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="bg-card text-card-foreground rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
							>
								<pillar.icon
									className="w-12 h-12 text-primary mb-4"
									size={28}
								/>
								<h3 className="text-xl font-bold mb-3">
									{pillar.title}
								</h3>
								<p className="text-muted-foreground text-sm">
									{pillar.description}
								</p>
							</AnimationContainer>
						))}
					</div>

					<AnimationContainer
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.5,
							duration: 0.8,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="text-center mt-16 max-w-3xl mx-auto"
					>
						<h3 className="text-3xl font-bold mb-4">
							Por que nossa metodologia funciona?
						</h3>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Combinamos o que há de mais moderno em
							tecnologia educacional com a expertise de
							professores qualificados, criando um ambiente
							de aprendizado dinâmico e focado nos
							resultados. Nosso método é projetado para que
							você não apenas aprenda inglês, mas também se
							sinta confiante para usá-lo em qualquer
							situação.
						</p>
					</AnimationContainer>
				</Container>
			</section>
		</>
	);
}
