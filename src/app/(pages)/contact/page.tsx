// app/contact/page.tsx
"use client"; // Marque como Client Component, pois haverá interação com o formulário

import { Mail, Phone } from "lucide-react"; // Ícones para informações de contato
import { useState } from "react";
import {
	Button,
	Container,
	Input,
	Label,
	Textarea,
	WaveBackground,
} from "@/components";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>,
	) => {
		e.preventDefault();
		console.log("Dados do formulário enviados:", formData);
		alert(
			"Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.",
		);
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		}); // Limpa o formulário
	};

	return (
		<>
			<section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary to-secondary/70 text-primary-foreground text-center flex flex-col items-center justify-start min-h-[70vh] overflow-hidden">
				<Container className="  z-10">
					<div className="w-full max-w-2xl mx-auto mb-12 flex flex-col items-center">
						<h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl mb-4">
							Entre em Contato Conosco
						</h1>
						<p className="text-xl mb-8 text-center">
							Tem dúvidas sobre nossos cursos, matrículas ou
							quer bater um papo? Preencha o formulário
							abaixo e entraremos em contato o mais breve
							possível!
						</p>
					</div>
				</Container>

				<WaveBackground
					className="z-0"
					fillColor="fill-background"
				/>
			</section>

			<section className="w-full flex items-center justify-center py-20 px-4 md:px-8 lg:px-16">
				<div className="bg-background w-full max-w-2xl p-8 md:p-12 mb-12 rounded-lg shadow text-foreground">
					<form
						onSubmit={handleSubmit}
						className="space-y-6"
					>
						<div>
							<Label
								htmlFor="name"
								className="text-lg mb-2 block text-start"
							>
								Seu Nome Completo
							</Label>
							<Input
								id="name"
								name="name"
								type="text"
								placeholder="Ex: João da Silva"
								value={formData.name}
								onChange={handleChange}
								required
								className="h-12 px-4 text-base"
							/>
						</div>

						<div>
							<Label
								htmlFor="email"
								className="text-lg mb-2 block text-start"
							>
								Seu Melhor E-mail
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="contato@email.com"
								value={formData.email}
								onChange={handleChange}
								required
								className="h-12 px-4 text-base"
							/>
						</div>

						<div>
							<Label
								htmlFor="subject"
								className="text-lg mb-2 block text-start"
							>
								Assunto
							</Label>
							<Input
								id="subject"
								name="subject"
								type="text"
								placeholder="Ex: Dúvida sobre curso iniciante"
								value={formData.subject}
								onChange={handleChange}
								required
								className="h-12 px-4 text-base"
							/>
						</div>

						<div>
							<Label
								htmlFor="message"
								className="text-lg mb-2 block text-start"
							>
								Sua Mensagem
							</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="Descreva sua dúvida ou solicitação..."
								value={formData.message}
								onChange={handleChange}
								rows={5}
								required
								className="p-4 text-base resize-y"
							/>
						</div>

						<Button
							type="submit"
							size="lg"
							className="w-full text-lg py-3 rounded-lg bg-primary hover:bg-primary/90 transition-colors duration-300"
						>
							Enviar Mensagem
						</Button>
					</form>

					<div className="mt-8 pt-6 border-t border-muted-foreground/20 text-center text-muted-foreground">
						<h3 className="text-xl font-semibold mb-4 text-foreground">
							Outras Formas de Contato
						</h3>
						<p className="flex items-center justify-center gap-2 text-lg mb-2">
							<Mail className="w-5 h-5" />
							<span>contato@speakup.com</span>
						</p>
						<p className="flex items-center justify-center gap-2 text-lg">
							<Phone className="w-5 h-5" />
							<span>(XX) XXXX-XXXX</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
