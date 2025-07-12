// app/testimonials/page.tsx

import { Star } from "lucide-react"; // Ícone de estrela para avaliação
import Image from "next/image";
import {
	AnimationContainer,
	Container,
	WaveBackground,
} from "@/components";
import { testimonials } from "@/config/testimonials";

export default function TestimonialsPage() {
	return (
		<>
			{/* Seção Hero "Depoimentos" */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[30vh] md:min-h-[70vh]">
				<AnimationContainer
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "backInOut" }}
					viewport={{ once: true, amount: 0.5 }}
				>
					<Container className="z-10">
						<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-7xl mb-4">
							O que dizem Nossos Alunos
						</h1>
						<p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
							Veja as histórias de sucesso de quem
							transformou seu inglês com a SpeakUp.
						</p>
					</Container>
				</AnimationContainer>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção de Depoimentos */}
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
							Histórias de{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Sucesso
							</span>
						</h2>
					</AnimationContainer>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{testimonials.map((testimonial, index) => (
							<AnimationContainer
								key={testimonial.name}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.1 * index,
									duration: 0.6,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
								className="bg-card text-card-foreground rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
							>
								<div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-secondary/50">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										layout="fill"
										objectFit="cover"
										className="rounded-full"
									/>
								</div>
								<h3 className="text-xl font-bold mb-1">
									{testimonial.name}
								</h3>
								<p className="text-sm text-secondary mb-2">
									{testimonial.course}
								</p>
								<div className="flex justify-center mb-4">
									{Array.from({ length: 5 }).map((_, i) => (
										<Star
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={i}
											className={`w-5 h-5 ${
												i < testimonial.rating
													? "fill-yellow-400 text-yellow-400"
													: "fill-muted text-muted-foreground"
											}`}
										/>
									))}
								</div>
								<p className="text-muted-foreground text-sm italic">
									&quot;{testimonial.testimonial}&quot;
								</p>
							</AnimationContainer>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}
