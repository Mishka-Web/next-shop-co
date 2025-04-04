import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const integralfc = localFont({
	src: [
		{
			path: "../public/fonts/IntegralCF/IntegralCF-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/IntegralCF/IntegralCF-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/IntegralCF/IntegralCF-DemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/IntegralCF/IntegralCF-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-mono",
})

const satoshi = localFont({
	src: [
		{
			path: "../public/fonts/Satoshi/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-sans",
})

export const metadata: Metadata = {
	title: "Shop.co",
	description: "Shop.co is a new way to buy and sell online.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${satoshi.variable} ${integralfc.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
