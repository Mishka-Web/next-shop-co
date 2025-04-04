import Intro from "./Intro";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
// import { ICard } from "./Card";
// import Card from "./Card";
// import { products } from "../api/products/route";
import { Button } from "./ui/button";

export default function Main() {
	return (
		<main className="flex-grow">
			<Intro />
			<div className="py-[72px_64px]">
				<Wrapper>
					<Heading>new arrivals</Heading>
					{/* <div className="grid grid-cols-4 gap-5">
						{products.map((product: ICard, index) => (
							index < 4 &&
							<Card key={product.id} {...product} />
						))}
					</div> */}
					<Button className="min-w-[218px] mt-9 mx-auto" variant={"outline"}>View all</Button>
				</Wrapper>
			</div>
			<div className="py-[64px_80px]">
				<Wrapper>
					<span className="block w-full h-[1px] bg-[rgba(0,0,0,0.1)] mb-[64px]" />
					<Heading>top selling</Heading>
					{/* <div className="grid grid-cols-4 gap-5">
						{products.map((product: ICard, index) => (
							index >= 4 &&
							<Card key={product.id} {...product} />
						))}
					</div> */}
					<Button className="min-w-[218px] mt-9 mx-auto" variant={"outline"}>View all</Button>
				</Wrapper>
			</div>
		</main>
	);
}