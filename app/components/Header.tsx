import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Search from "./Search";

const navLinks = [
	{
		label: "Shop",
		href: "/shop",
		submenu: [
			{
				label: "Men",
				href: "/shop/men",
			},
			{
				label: "Women",
				href: "/shop/women",
			}
		]
	},
	{
		label: "On Sale",
		href: "/on-sale",
	},
	{
		label: "New Arrivals",
		href: "/new-arrivals",
	},
	{
		label: "Brands",
		href: "/brands",
	}
];

export default function Header() {
	return (
		<header className="flex flex-col gap-0 top-0 left-0 w-full z-50">
			<div className="bg-black text-white">
				<Wrapper>
					<div className="flex justify-center items-center gap-4 py-[9px] text-[14px]">
						<p className="ms-auto">Sign up and get 20% off to your first order. <Link className="font-bold underline underline-offset-4 hover:no-underline" href="/signup">Sign Up Now</Link></p>
						<button type="button" className="inline-flex cursor-pointer ms-auto">
							<Image src="/images/icons/close.svg" width={20} height={20} alt="close" />
						</button>
					</div>
				</Wrapper>
			</div>
			<div className="bg-white text-black">
				<Wrapper>
					<div className="flex items-center py-6 gap-10 flex-wrap">
						<Link href="/" className="inline-flex uppercase font-mono font-bold text-[32px] translate-y-[-6px]">shop.co</Link>
						<nav className="">
							<ul className="flex items-center gap-6">
								{navLinks.map(({ label, href, submenu }) => (
									<li key={label} className="relative">
										<Link href={href} className="inline-flex relative text-base hover:underline">{label}</Link>
										{submenu && submenu.length > 0 && (
											<div className="absolute top-full left-0 w-full bg-white text-black p-6 hidden">
												<ul className="flex flex-col gap-4">
													{submenu.map(({ label, href }) => (
														<li key={label}>
															<Link href={href} className="inline-flex relative text-base hover:underline">{label}</Link>
														</li>
													))}
												</ul>
											</div>
										)}
									</li>
								))}
							</ul>
						</nav>
						<Search />
						<div className="flex items-center gap-[14px] ms-auto">
							<Link href="/cart" className="inline-flex">
								<Image src="/images/icons/cart.png" width={24} height={24} alt="cart" />
							</Link>
							<Link href="/profile" className="inline-flex">
								<Image src="/images/icons/user.png" width={24} height={24} alt="cart" />
							</Link>
						</div>
					</div>
				</Wrapper>
			</div>
		</header>
	);
}