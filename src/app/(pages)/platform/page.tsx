import { Container, WaveBackground } from "@/components";

export default function PlatformPage() {
	return (
		<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[60vh]">
			<Container className="z-10">
				<h1 className="text-3xl font-bold mb-4">
					Plataforma
				</h1>
				<p className="text-lg text-gray-700">
					Esta é a página da plataforma. Em breve, mais
					informações!
				</p>
				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</Container>
		</section>
	);
}
