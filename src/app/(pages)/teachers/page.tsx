import Image from "next/image";
import {
	AnimationContainer,
	Container,
	WaveBackground,
} from "@/components";
import { teachers } from "@/config/teachers";

export default function TeachersPage() {
	return (
		<>
			{/* Seção Hero "Nossos Professores" */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[30vh] md:min-h-[70vh]">
				<AnimationContainer
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "backInOut" }}
					viewport={{ once: true, amount: 0.5 }}
				>
					<Container className="z-10">
						<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-7xl mb-4">
							Nossos Professores
						</h1>
						<p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
							Conheça a equipe de especialistas que irá te
							guiar na jornada do aprendizado de inglês.
						</p>
					</Container>
				</AnimationContainer>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção de Perfil dos Professores */}
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
							Time de{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Especialistas
							</span>
						</h2>
					</AnimationContainer>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
						{teachers.map((teacher, index) => (
							<AnimationContainer
								key={teacher.name}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									delay: 0.1 * index,
									duration: 0.6,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 transition-transform duration-300 hover:scale-[1.02]"
							>
								<div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/50">
									<Image
										src={teacher.image}
										alt={teacher.name}
										layout="fill"
										objectFit="cover"
										className="rounded-full"
									/>
								</div>
								<h3 className="text-2xl font-bold mb-2 text-primary">
									{teacher.name}
								</h3>
								<p className="text-md text-secondary mb-3">
									{teacher.specialty}
								</p>
								<p className="text-sm text-muted-foreground text-center">
									{teacher.bio}
								</p>
							</AnimationContainer>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}
