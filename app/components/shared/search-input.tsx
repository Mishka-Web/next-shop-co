"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ICard } from "./card";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";

interface Props {
	className?: string;
}

export const Search: React.FC<Props> = ({ className }) => {
	const [focused, setFocused] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const [data, setData] = React.useState<Product[]>([]);

	function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length < 2) setData([]);
		setSearchValue(e.currentTarget.value);
	}

	React.useEffect(() => {
		if (searchValue.length > 2) {
			Api.products.search(searchValue.trim()).then((res) => setData(res));
		}
	}, [searchValue]);

	return (
		<div className="relative flex-grow">
			<search className={cn("flex items-center gap-3 rounded-[62px] flex-grow px-4 bg-[#F0F0F0]", className)}>
				<button type="button" className="inline-flex cursor-pointer shrink-0">
					<Image src="/images/icons/loupe.png" width={24} height={24} alt="search" />
				</button>
				<input className="w-full h-[48px] bg-transparent placeholder:transition-all placeholder:duration-[400ms] ease-in-out outline-none placeholder:text-[rgba(0,0,0,0.4)] focus-within:placeholder:text-[rgba(0,0,0,0.6)] font-medium text-[rgba(0,0,0,1)]" type="text"
					placeholder="Search for products..."
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					onInput={onInputChange}
					value={searchValue} />
			</search>
			<div className={cn("absolute top-[calc(100%+8px)] left-0 w-full h-auto rounded-sm shadow-[0px_4px_20px_rgba(0,0,0,0.1)] transition-all duration-[400ms] ease-in-out bg-white pointer-events-auto", focused ? "opacity-100 visible" : "opacity-0 invisible")}>
				{
					data && data.length > 0 ? (
						data.map((item: ICard) => (
							<div key={item.id} className="flex items-center gap-4 px-4 py-2 duration-300 ease-in-out cursor-pointer hover:bg-[rgba(0,0,0,0.05)]">
								<Image src={item.imageUrl} width={64} height={64} alt="" />
								<div>
									<p className="font-bold">{item.name}</p>
									<p className="text-[rgba(0,0,0,0.6)]">${item.price}</p>
								</div>
							</div>
						))
					) : (
						<p className="px-4 py-2">No results</p>
					)
				}
			</div>
		</div>
	);
}