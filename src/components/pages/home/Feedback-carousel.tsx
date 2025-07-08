"use client"; // Adicione esta diretiva no topo do arquivo se este componente usar useState/useEffect ou outros hooks do React, pois é um componente cliente.

import * as React from "react";
import type { CarouselApi } from "@/components"; // Importe o tipo CarouselApi
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

// Interface para as propriedades do nosso carrossel
interface FeedbackCarouselProps {
	children: React.ReactNode;
}

export function FeedbackCarousel({
	children,
}: FeedbackCarouselProps) {
	const [api, setApi] = React.useState<CarouselApi>();

	React.useEffect(() => {
		if (!api) {
			return;
		}
	}, [api]);

	return (
		<div className="relative">
			{" "}
			{/* Adiciona relative para posicionar as setas */}
			<Carousel
				setApi={setApi}
				opts={{
					align: "start", // Alinha os itens ao início do contêiner do carrossel
					loop: true, // Permite que o carrossel seja infinito
				}}
				className="w-full max-w-4xl mx-auto" // Adiciona largura e centraliza o carrossel
			>
				<CarouselContent>
					{React.Children.map(children, (child, index) => (
						<CarouselItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="md:basis-1/2 lg:basis-1/3 p-4"
						>
							{" "}
							{/* Ajusta a base para responsividade */}
							{child}
						</CarouselItem>
					))}
				</CarouselContent>
				{/* Botões de Navegação - Posicionados fora do carrossel para melhor visibilidade */}
				<CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
				<CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
			</Carousel>
		</div>
	);
}
