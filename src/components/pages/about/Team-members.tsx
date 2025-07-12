import Image from "next/image";
import { AnimationContainer } from "@/components/global/Animation";
import { teamMembers } from "@/config/team";

const TeamMembers = () => {
	return (
		<>
			{teamMembers.map((member) => (
				<AnimationContainer
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "backInOut" }}
					viewport={{ once: true, amount: 0.5 }}
					key={member.id}
					className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center"
				>
					<div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-secondary/50">
						<Image
							src={member.image}
							alt={member.name}
							layout="fill"
							objectFit="cover"
							className="rounded-full"
						/>
					</div>

					<h3 className="text-xl font-bold mb-1">
						{member.name}
					</h3>
					<p className="text-sm text-secondary mb-3">
						{member.role}
					</p>
					<p className="text-muted-foreground text-sm line-clamp-4">
						{member.bio}
					</p>
				</AnimationContainer>
			))}
		</>
	);
};

export { TeamMembers };
