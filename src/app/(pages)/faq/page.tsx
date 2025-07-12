import Link from "next/link";
import {
	AnimationContainer,
	Container,
	WaveBackground,
} from "@/components";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"; // Certifique-se de que o caminho está correto
import { faqItems } from "@/config/faq";

export default function FAQPage() {
	return (
		<>
			{/* Seção Hero "Perguntas Frequentes" */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[30vh] md:min-h-[70vh]">
				<AnimationContainer
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "backInOut" }}
					viewport={{ once: true, amount: 0.5 }}
				>
					<Container className="z-10">
						<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-7xl mb-4">
							Perguntas Frequentes
						</h1>
						<p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
							Encontre respostas para as dúvidas mais comuns
							sobre nossos cursos e plataforma.
						</p>
					</Container>
				</AnimationContainer>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção de FAQs com Accordion */}
			<section className="py-20 px-4 md:px-8 lg:px-16 my-16">
				<Container className="max-w-3xl mx-auto">
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
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center">
							Dúvidas{" "}
							<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Comuns
							</span>
						</h2>
					</AnimationContainer>

					<Accordion
						type="single"
						collapsible
						className="w-full"
					>
						{faqItems.map((item, index) => (
							<AnimationContainer
								key={item.question}
								initial={{
									opacity: 0,
									x: index % 2 === 0 ? -50 : 50,
								}}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									delay: 0.1 * index,
									duration: 0.6,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
							>
								<AccordionItem
									value={`item-${index}`}
									className="border-b py-4"
								>
									<AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-base text-muted-foreground pt-2">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							</AnimationContainer>
						))}
					</Accordion>

					<AnimationContainer
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.5,
							duration: 0.8,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="text-center mt-16"
					>
						<p className="text-lg text-muted-foreground">
							Não encontrou sua resposta?{" "}
							<Link
								href="/contact"
								className="text-primary hover:underline font-medium"
							>
								Entre em contato conosco!
							</Link>
						</p>
					</AnimationContainer>
				</Container>
			</section>
		</>
	);
}
