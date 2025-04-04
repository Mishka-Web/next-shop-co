import clsx from "clsx";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface ICard {
	id: number;
	image: StaticImageData;
	title: string;
	price: string;
	sale?: string;
	rate: string;
}

export default function Card({ image, title, price, rate, sale }: ICard, className?: string) {
	return (
		<article className={clsx("flex flex-col gap-2 bg-white", className)}>
			<Link className="flex rounded-[20px] overflow-hidden" href="/">
				<Image className="pointer-events-none select-none object-cover w-full h-full max-h-[298px]" src={image} alt="" />
			</Link>
			<h4 className="mt-2 font-bold text-[20px]">{title}</h4>
			<div className="flex items-center gap-[13px]">
				<div className="flex items-center gap-[5.3px]">
					<Image src="/images/icons/star.svg" width={18.5} height={18.5} alt="star" />
					<Image src="/images/icons/star.svg" width={18.5} height={18.5} alt="star" />
					<Image src="/images/icons/star.svg" width={18.5} height={18.5} alt="star" />
					<Image src="/images/icons/star.svg" width={18.5} height={18.5} alt="star" />
					<Image src="/images/icons/star.svg" width={18.5} height={18.5} alt="star" />
				</div>
				<p className="text-sm">{rate}/<span className="text-[rgba(0,0,0,0.6)]">5</span></p>
			</div>
			{sale && (
				<div className="flex items-center gap-2.5 font-bold text-2xl">
					<p>${sale}</p>
					<p className="text-[rgba(0,0,0,0.4)] line-through">${price}</p>
					<p className="ms-[2px] rounded-[62px] inline-flex text-center justify-center items-center bg-[rgba(255,51,51,0.1)] w-[58px] h-[28px] text-[12px] select-none">
						<span className="text-[#FF3333]">-{Math.round((+price - +sale) / +price * 100)}%</span>
					</p>
				</div>
			)}
			{!sale && (
				<p className="font-bold text-2xl">${price}</p>
			)}
		</article>
	);
}