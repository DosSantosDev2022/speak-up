// app/page.tsx

// biome-ignore assist/source/organizeImports: <explanation>
import { CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	Button,
	Input,
	WaveBackground,
	Container,
	AnimationContainer, // Importe o novo componente AnimationContainer
} from "@/components";
import {
	advantages,
	audienceCategories,
	feedbackData,
} from "@/config/home-page";
import { AdvantageCard } from "@/components/pages/home/Advantage-card";
import { AudienceCard } from "@/components/pages/home/Audience-card";
import { FeedbackCarousel } from "@/components/pages/home/Feedback-carousel";

export default function HomePage() {
	return (
		<>
			{/* Seção Hero - Contêiner principal com background e onda */}
			<section className="relative pt-4 pb-4 md:pb-20 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground overflow-hidden min-h-[calc(100vh - var(--header-total-height))] flex items-center justify-center">
				{/* CONTAINER para alinhar o conteúdo da Hero com o Header */}
				<Container className="mb-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
					{/* Bloco de Conteúdo (Título, Descrição, Botões, Estatísticas) */}
					{/* Animação para o bloco de texto (título, descrição, botões) */}
					<AnimationContainer
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: "easeInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						<div className="flex-1 max-w-full md:max-w-2xl text-center md:text-left z-10">
							<h1 className="text-3xl leading-tight font-bold sm:text-5xl md:text-6xl mb-4">
								Embarque em uma jornada online rumo à
								fluência no inglês!
							</h1>
							<p className="mt-4 text-lg sm:text-xl">
								Explore uma didática e ferramentas
								inovadoras que impulsionarão seu avanço
								linguístico. Descubra o poder transformador
								da SpeakUp e abra portas para um futuro
								brilhante e repleto de oportunidades!
							</p>
						</div>

						{/* Grupo de Botões */}
						{/* Animação para os botões */}
						<AnimationContainer
							initial={{ opacity: 0, y: 30 }}
							transition={{
								delay: 0.3,
								duration: 0.6,
								ease: "easeInOut",
							}}
							viewport={{ once: true, amount: 0.5 }}
							className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
						>
							<Button
								size={"lg"}
								className="bg-muted text-foreground w-full rounded-4xl sm:w-auto hover:scale-95 hover:bg-muted"
								asChild
							>
								<Link href="/#">Pré-Matrícula</Link>
							</Button>
							<Button
								size={"lg"}
								className="bg-muted text-foreground w-full rounded-4xl sm:w-auto hover:scale-95 hover:bg-muted"
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
						</AnimationContainer>

						{/* Bloco da Imagem de Ícones e Estatísticas */}
						{/* Animação para as estatísticas */}
						<AnimationContainer
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								delay: 0.6,
								duration: 0.7,
								ease: "easeInOut",
							}}
							viewport={{ once: true, amount: 0.5 }}
							className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-8 p-4"
						>
							<Image
								src={"/images/icons.webp"}
								alt="Ilustração de estudantes de inglês"
								width={100}
								height={100}
								quality={100}
								className="max-w-full h-auto"
							/>
							{/* Seções de Estatísticas */}
							<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-8 mt-4 sm:mt-0">
								{/* Seção de Estudantes Conectados */}
								<div className="flex flex-col items-center text-center">
									<span className="text-4xl md:text-3xl font-bold">
										4.359
									</span>
									<span className="text-xl md:text-base mt-1">
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
									<span className="text-4xl md:text-3xl font-bold">
										4.8/5
									</span>
									<span className="text-xl md:text-base flex items-center justify-center gap-1">
										<span className="text-yellow-400">
											★★★★★
										</span>
										Avaliações
									</span>
								</div>
							</div>
						</AnimationContainer>
					</AnimationContainer>

					{/* Imagem do estudante */}
					{/* Animação para a imagem do estudante */}
					<AnimationContainer
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="relative lg:-bottom-6 -bottom-12 right-0 w-[80%] md:w-[40%] lg:w-[35%] xl:w-[30%] h-auto "
					>
						<Image
							src={"/images/student-hero.webp"}
							alt="Imagem de estudante de inglês"
							width={700}
							height={700}
							quality={100}
							className="w-full h-auto object-cover"
						/>
					</AnimationContainer>
				</Container>
				{/* Onda de Fundo - Posicionada no final da seção Hero */}
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>
			{/* Seção vantagens exclusivas */}
			<section className="py-20">
				{/* Animação para o título e o link da seção de vantagens */}
				<AnimationContainer
					initial={{ opacity: 0, y: 30 }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<Container className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
						<div className="w-full md:w-4xl space-y-4 text-center md:text-left">
							<h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-bold">
								Descubra as{" "}
								<span className="bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
									vantagens
								</span>{" "}
								exclusivas do SpeakUp
							</h2>
							<Link
								className="inline-block border border-secondary text-secondary rounded-4xl px-4 py-2 hover:bg-gradient-to-b hover:to-primary hover:from-secondary/70 hover:text-primary-foreground transition-colors duration-300"
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
					</Container>
				</AnimationContainer>

				{/* Animação para cada AdvantageCard individualmente com um atraso */}
				<Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					{advantages.map((advantage, index) => (
						<AnimationContainer
							key={advantage.id}
							initial={{ opacity: 0, y: 50 }}
							transition={{
								delay: index * 0.1,
								duration: 0.6,
								ease: "easeInOut",
							}} // Atraso progressivo
							viewport={{ once: true, amount: 0.3 }}
						>
							<AdvantageCard
								icon={advantage.icon}
								title={advantage.title}
								description={advantage.description}
							/>
						</AnimationContainer>
					))}
				</Container>
			</section>
			{/* Seção "Encontre o melhor caminho para aprender inglês!" */}
			<section className="py-20">
				{/* Animação para o título e o botão da seção de audiência */}
				<AnimationContainer
					initial={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.7, ease: "backInOut" }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<Container className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
						{/* Título - Aparece primeiro em mobile */}
						<div className="max-w-2xl w-full text-center md:text-left">
							<h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
								Encontre o melhor{" "}
								<span className="font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
									caminho
								</span>{" "}
								para aprender inglês!
							</h2>
						</div>

						{/* Botão "Saiba mais!" - Aparece segundo em mobile, alinhado à direita em desktop */}
						<div className="w-full md:w-auto flex justify-center md:justify-end">
							<Link
								className="inline-block border border-secondary text-secondary rounded-4xl px-6 py-3 hover:bg-gradient-to-b hover:to-primary hover:from-secondary/70 hover:text-primary-foreground transition-colors duration-300 text-lg"
								href={"/courses"}
							>
								Saiba mais!
							</Link>
						</div>
					</Container>
				</AnimationContainer>

				{/* Animação para cada AudienceCard individualmente com um atraso */}
				<Container className="mt-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{audienceCategories.map((audience, index) => (
							<AnimationContainer
								key={audience.title}
								initial={{ opacity: 0, y: 50, scale: 0.9 }}
								transition={{
									delay: index * 0.1,
									duration: 0.8,
									ease: "backInOut",
								}} // Atraso progressivo
								viewport={{ once: true, amount: 0.3 }}
							>
								<AudienceCard
									imageSrc={audience.imageSrc}
									title={audience.title}
									description={audience.description}
									linkHref={audience.linkHref}
								/>
							</AnimationContainer>
						))}
					</div>
				</Container>
			</section>

			{/* Seção plataforma */}
			<section className="py-20">
				<Container className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16">
					{/* Bloco do Título e Descrição */}
					{/* Animação para o texto da plataforma */}
					<AnimationContainer
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.7,
							ease: "easeInOut",
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

					{/* Imagem da Plataforma */}
					{/* Animação para a imagem da plataforma */}
					<AnimationContainer
						initial={{ opacity: 0, x: 50, scale: 0.9 }}
						whileInView={{ opacity: 1, x: 0, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: "easeInOut",
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

			{/* Seção FEEDBACK */}
			<section className="py-20">
				<Container className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
					{/* Bloco de Título e Texto */}
					{/* Animação para o texto de feedback */}
					<AnimationContainer
						initial={{ opacity: 0, y: 30 }}
						transition={{
							duration: 0.7,
							ease: "easeInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="w-full lg:w-1/3 text-center lg:text-left space-y-4"
					>
						<span className="text-base font-bold bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent uppercase tracking-wider">
							FEEDBACK
						</span>
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
							Veja o que nossos estudantes estão achando do
							<span className="bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								{" "}
								SpeakUp!
							</span>
						</h2>
					</AnimationContainer>

					{/* Carrossel de Feedbacks */}
					{/* Animação para o carrossel de feedback */}
					<AnimationContainer
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: "easeInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
						className="w-full lg:w-2/3"
					>
						<FeedbackCarousel>
							{feedbackData.map((feedback) => (
								<div
									key={feedback.id}
									className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center"
								>
									<Image
										src={feedback.avatar}
										alt={feedback.name}
										width={80}
										height={80}
										className="rounded-full mb-4 object-cover"
									/>
									<p className="text-lg font-semibold text-card-foreground">
										{feedback.name}
									</p>
									<div className="text-yellow-400 text-xl my-2">
										{"★".repeat(feedback.rating)}
										{"☆".repeat(5 - feedback.rating)}
									</div>
									<p className="text-muted-foreground line-clamp-4 mt-2">
										"{feedback.text}"
									</p>
								</div>
							))}
						</FeedbackCarousel>
					</AnimationContainer>
				</Container>
			</section>

			{/* Seção newslatters */}
			<section className="py-20">
				{/* Animação para toda a seção da newsletter */}
				<AnimationContainer
					initial={{ opacity: 0, y: 50, scale: 0.95 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.4 }}
				>
					<Container>
						<div className="px-4 border rounded-4xl bg-gradient-to-b from-primary to-secondary/70 sm:px-6 md:px-8 lg:px-28 py-6 flex flex-col items-center justify-between gap-12">
							{/* Bloco de Texto (Título e Descrição) */}
							<div className="w-full flex flex-col items-center text-center space-y-4 text-primary-foreground">
								<h3 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
									Inscreva-se para receber{" "}
									<span className="text-accent">
										ofertas, descontos, atualizações
									</span>{" "}
									e muito mais!
								</h3>
								<p className="text-base sm:text-lg max-w-xl leading-relaxed">
									Inscreva-se em nossa newsletter e tenha
									acesso exclusivo a conteúdos educacionais,
									dicas de aprendizado de idiomas,
									atualizações sobre novos cursos e
									promoções.
								</p>
							</div>

							{/* Formulário de Inscrição */}
							{/* Animação para o formulário de inscrição */}
							<AnimationContainer
								initial={{ opacity: 0, y: 20 }}
								transition={{
									delay: 0.4,
									duration: 0.6,
									ease: "easeInOut",
								}}
								viewport={{ once: true, amount: 0.5 }}
								className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 lg:mt-0 max-w-md mx-auto"
							>
								<Input
									type="email"
									placeholder="Seu melhor e-mail"
									className="flex-grow rounded-lg h-12 px-6 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent text-foreground bg-background"
								/>
								<Button
									size="lg"
									className="w-full sm:w-auto rounded-lg h-12 bg-muted text-muted-foreground hover:bg-muted hover:scale-95"
								>
									Inscreva-se
								</Button>
							</AnimationContainer>
						</div>
					</Container>
				</AnimationContainer>
			</section>
		</>
	);
}
