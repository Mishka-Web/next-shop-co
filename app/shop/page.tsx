import Wrapper from "@/components/Wrapper";

import { ICard } from "@/components/shared/card";
import Card from "@/components/shared/card";
import { prisma } from "@/prisma/prisma-client";
import Header from "@/components/Header";

export default async function Shop() {
	const products = await prisma.product.findMany();
	return (
		<>
			<Header />
			<div className="py-[72px_64px]">
				<Wrapper>
					<div className="grid grid-cols-4 gap-5">
						{products.map((product: ICard) => (
							<Card key={product.id} {...product} />
						))}
					</div>
				</Wrapper>
			</div>
		</>
	)
}