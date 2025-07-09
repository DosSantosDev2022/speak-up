// biome-ignore assist/source/organizeImports: <explanation>
import {
	AnimationContainer,
	Container,
	WaveBackground,
} from "@/components";
import { blogPosts } from "@/config/blog";
import Image from "next/image";
import Link from "next/link"; // Para links dos posts

export default function BlogPage() {
	return (
		<>
			{/* Hero Section do Blog */}
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[35vh] md:min-h-[60vh]">
				<Container className="z-10">
					<AnimationContainer
						initial={{ opacity: 0, y: 50 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
							Blog SpeakUp
						</h1>
						<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
							Mantenha-se atualizado com as últimas dicas,
							novidades e artigos sobre aprendizado de
							inglês e tecnologia.
						</p>
					</AnimationContainer>
					<WaveBackground
						className="z-0"
						fillColor="fill-background"
					/>
				</Container>
			</section>

			{/* Seção de Posts do Blog */}
			<section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
				<Container>
					<AnimationContainer
						initial={{ opacity: 0, y: 50 }}
						transition={{
							duration: 0.7,
							ease: "backInOut",
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						<h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-center mb-12">
							Últimos{" "}
							<span className="bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
								Posts
							</span>
						</h2>
					</AnimationContainer>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post, index) => (
							<AnimationContainer
								key={post.slug}
								initial={{ opacity: 0, y: 50 }}
								transition={{
									duration: 0.7,
									delay: index * 0.1,
									ease: "backInOut",
								}}
								viewport={{ once: true, amount: 0.3 }}
							>
								<Link href={`/#`} passHref>
									<div className="h-full rounded-2xl shadow flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300 ease-in-out">
										<div className="relative w-full h-48 sm:h-56 overflow-hidden">
											<Image
												src={post.image}
												alt={post.title}
												layout="fill" // Permite que a imagem preencha o container
												objectFit="cover" // Corta a imagem para preencher e manter a proporção
												quality={80}
												className="transition-transform duration-300 group-hover:scale-105"
											/>
										</div>
										<div className="p-6 pb-0 flex-grow">
											<h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
												{post.title}
											</h2>
											<p className="text-muted-foreground text-sm">
												{post.description}
											</p>
										</div>
										<div className="p-6 pt-4">
											<p className="text-xs text-gray-500 mt-2">
												{post.date}
											</p>
										</div>
									</div>
								</Link>
							</AnimationContainer>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}
