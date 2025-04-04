import clsx from "clsx";

export default function Wrapper({ children, className }: { children?: React.ReactNode, className?: string }) {
	return <div className={clsx("w-full max-w-[1260px] mx-auto px-2.5 flex flex-col", className)}>{children}</div>;
}