// components/Header.tsx
// biome-ignore assist/source/organizeImports: <explanation>
import {
	Button,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/sobre", label: "Sobre" },
		{ href: "/cursos", label: "Cursos" },
		{ href: "/plataforma", label: "Plataforma" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contato", label: "Contato" },
	];

	return (
		<header className="relative pt-8 pb-8 bg-primary overflow-hidden z-50">
			{/* Conteúdo principal do header, posicionado em relação ao topo */}
			{/* Container para alinhar o conteúdo com a HomePage */}
			<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
				<div className="relative z-20 flex items-center justify-between bg-background px-4 py-2 shadow-md rounded-lg">
					{" "}
					{/* Removido px-4 e py-2 daqui */}
					{/* Logo */}
					<Link
						href="/"
						aria-label="Voltar para a página inicial"
					>
						<Image
							src="/images/logo.webp"
							alt="Speak Up Logo"
							width={120}
							height={35}
							quality={100}
							className="shrink-0"
						/>
					</Link>
					{/* Navegação Desktop */}
					<nav className="hidden md:flex space-x-4">
						{navLinks.map((link) => (
							<Link
								prefetch
								key={link.href}
								href={link.href}
								className="text-base font-medium text-foreground hover:text-primary transition-colors"
							>
								{link.label}
							</Link>
						))}
					</nav>
					{/* Botões de Ação Desktop */}
					<div className="hidden md:flex items-center space-x-2">
						<Button variant={"link"} asChild>
							<Link href="/login">Login</Link>
						</Button>
						<Button variant={"default"} asChild>
							<Link href="/signup">Sign Up</Link>
						</Button>
					</div>
					{/* Menu Hambúrguer (Mobile) com Shadcn UI Sheet */}
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="default"
									size="icon"
									aria-label="Abrir menu mobile"
								>
									<MenuIcon />
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="p-4">
								<SheetHeader>
									<SheetTitle className="sr-only">
										Menu de Navegação
									</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col gap-4 mt-8">
									{navLinks.map((link) => (
										<Link
											prefetch
											key={link.href}
											href={link.href}
											className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2 block"
										>
											{link.label}
										</Link>
									))}
								</nav>
								<div className="mt-8 flex flex-col gap-2">
									<Button
										variant={"secondary"}
										className="text-lg w-full"
										asChild
									>
										<Link href="/login">Login</Link>
									</Button>
									<Button
										variant={"default"}
										className="text-lg w-full"
										asChild
									>
										<Link href="/signup">Sign Up</Link>
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
};

export { Header };
