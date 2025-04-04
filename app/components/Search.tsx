import Image from "next/image";

export default function Search() {
	return (
		<search className="flex items-center gap-3 flex-grow rounded-[62px] px-4 bg-[#F0F0F0]">
			<button type="button" className="inline-flex cursor-pointer shrink-0">
				<Image src="/images/icons/loupe.png" width={24} height={24} alt="search" />
			</button>
			<input className="w-full h-[48px] bg-transparent outline-none placeholder:text-[rgba(0,0,0,0.4)] focus-within:placeholder:text-[rgba(0,0,0,0.6)] text-[rgba(0,0,0,1)]" type="text" placeholder="Search for products..." />
		</search>
	);
}