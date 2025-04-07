import { cn } from "@/lib/utils";

export default function Heading({ children, className }: { children?: React.ReactNode, className?: string }) {
	return (
		<div className={cn("font-mono font-bold text-5xl mb-[55px] text-center", className)}>{children}</div>
	);
}