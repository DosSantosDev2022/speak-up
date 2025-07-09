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
					<Image
						src={member.image}
						alt={member.name}
						width={120}
						height={120}
						className="rounded-full object-cover mb-4 border-4 border-secondary"
					/>
					<h3 className="text-xl font-semibold text-card-foreground mb-1">
						{member.name}
					</h3>
					<p className="text-secondary text-sm font-bold mb-3">
						{member.role}
					</p>
					<p className="text-muted-foreground text-sm line-clamp-3">
						{member.bio}
					</p>
				</AnimationContainer>
			))}
		</>
	);
};

export { TeamMembers };
