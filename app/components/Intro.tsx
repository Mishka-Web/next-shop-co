import Wrapper from "./Wrapper";
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Intro() {
	return (
		<div className="bg-[#F2F0F1]">
			<div className="py-[103px_116px] z-10 overflow-hidden relative">
				<Image className="object-contain pointer-events-none select-none -z-[1] object-right-bottom" src="/images/intro/bg.png" fill alt="" />
				<Image className="object-contain pointer-events-none select-none -z-[1] absolute object-right-bottom top-[45%] right-[45%]" src="/images/intro/dec1.png" width={56} height={56} alt="" />
				<Image className="object-contain pointer-events-none select-none -z-[1] absolute object-right-bottom top-[12.5%] right-[5%]" src="/images/intro/dec2.png" alt="" width={104} height={104} />
				<Wrapper>
					<div className="flex flex-col items-start gap-8">
						<h2 className="font-bold text-[64px]/[64px] font-mono max-w-[577px]">
							FIND CLOTHES THAT MATCHES YOUR STYLE
						</h2>
						<p className="max-w-[545px] text-[rgba(0,0,0,0.6)] leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
						<Button className="min-w-[210px]">Shop Now</Button>
					</div>
					<div className="flex items-center gap-8 mt-12">
						<div className="flex flex-col">
							<h4 className="font-bold text-[40px]/[54px]">200+</h4>
							<p className="leading-[22px] text-[rgba(0,0,0,0.6)]">International Brands</p>
						</div>
						<span className="w-[2px] h-[74px] shrink-0 bg-[rgba(0,0,0,0.1)]"></span>
						<div className="flex flex-col">
							<h4 className="font-bold text-[40px]/[54px]">2,000+</h4>
							<p className="leading-[22px] text-[rgba(0,0,0,0.6)]">High-Quality Products</p>
						</div>
						<span className="w-[2px] h-[74px] shrink-0 bg-[rgba(0,0,0,0.1)]"></span>
						<div className="flex flex-col">
							<h4 className="font-bold text-[40px]/[54px]">30,000+</h4>
							<p className="leading-[22px] text-[rgba(0,0,0,0.6)]">Happy Customers</p>
						</div>
					</div>
				</Wrapper>
			</div>
			<div className="py-[42px] bg-black text-white">
				<Wrapper>
					<div className="flex items-center gap-4 justify-between">
						<div className="flex items-center justify-center">
							<Image className="object-contain pointer-events-none select-none" src="/images/intro/img1.png" width={166} height={33} alt="" />
						</div>
						<div className="flex items-center justify-center">
							<Image className="object-contain pointer-events-none select-none" src="/images/intro/img2.png" width={91} height={38} alt="" />
						</div>
						<div className="flex items-center justify-center">
							<Image className="object-contain pointer-events-none select-none" src="/images/intro/img3.png" width={156} height={36} alt="" />
						</div>
						<div className="flex items-center justify-center">
							<Image className="object-contain pointer-events-none select-none" src="/images/intro/img4.png" width={194} height={32} alt="" />
						</div>
						<div className="flex items-center justify-center">
							<Image className="object-contain pointer-events-none select-none" src="/images/intro/img5.png" width={207} height={33} alt="" />
						</div>
					</div>
				</Wrapper>
			</div>
		</div>
	);
}