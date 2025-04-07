import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function seed() {
	await prisma.user.createMany({
		data: [
			{
				name: "John Doe",
				email: "jdoe@me.com",
				password: hashSync("fthrte345", 10),
				verified: false,
				role: "USER"
			},
			{
				name: "admin",
				email: "admin@me.com",
				password: hashSync("fthrte345", 10),
				verified: true,
				role: "ADMIN"
			},
		],
	});
}

async function reset() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await reset();
		await seed();
	} catch (e) {
		console.error(e);
	}
}

main().then(async () => await prisma.$disconnect()).catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });