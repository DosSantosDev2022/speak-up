import Image from "next/image";
import Link from "next/link";
import {
	Button,
	Container,
	WaveBackground,
} from "@/components/";
import { courses } from "@/config/courses";

export default function CursosPage() {
	return (
		<>
			{/* Seção Hero "Nossos Cursos" */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[70vh]">
				<Container className="z-10">
					<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl mb-4">
						Explore Nossos Cursos
					</h1>
					<p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
						Encontre o caminho ideal para alcançar a
						fluência em inglês, com opções pensadas para
						cada objetivo e idade.
					</p>
				</Container>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			{/* Seção de Visão Geral dos Cursos (usando cards) */}
			<section className="py-20 px-4 md:px-8 lg:px-16">
				<Container className="">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
						Descubra qual curso é{" "}
						<span className="text-primary">para você!</span>
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{courses.map((course) => (
							<div
								key={course.id}
								className="flex flex-col bg-card rounded-lg shadow-lg overflow-hidden h-full"
							>
								{/* Imagem do Curso */}
								<div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
									<Image
										src={course.imageSrc}
										alt={course.title}
										fill
										style={{ objectFit: "cover" }}
									/>
								</div>

								{/* Conteúdo do Card */}
								<div className="p-6 flex flex-col justify-between flex-grow">
									<div>
										<h3 className="text-2xl font-bold text-card-foreground mb-3 leading-tight">
											{course.title}
										</h3>
										<p className="text-muted-foreground text-base mb-4 line-clamp-4">
											{course.description}
										</p>
									</div>
									{/* Botão de Link */}
									<Button
										asChild
										className="w-full mt-4 rounded-full"
									>
										<Link href={course.linkHref}>
											Saber Mais
										</Link>
									</Button>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Seção Chamada para Ação / FAQ (Exemplo) */}
			<section className="bg-muted py-20 px-4 md:px-8 lg:px-16 text-center">
				<Container className="">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
						Pronto para começar?
					</h2>
					<p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
						Se ainda tem dúvidas sobre qual curso escolher,
						fale com um de nossos consultores ou confira
						nossa seção de Perguntas Frequentes.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Button
							size="lg"
							className="rounded-full"
							asChild
						>
							<Link href="/contact">Fale Conosco</Link>
						</Button>
						<Button
							size="lg"
							className="rounded-full"
							asChild
						>
							<Link href="/faq">Perguntas Frequentes</Link>
						</Button>
					</div>
				</Container>
			</section>
		</>
	);
}
