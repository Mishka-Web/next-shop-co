import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get("q") || "";

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query,
				mode: "insensitive",
			},
		},
		take: 4
	});

	return NextResponse.json(products);
}

module.exports = { GET };