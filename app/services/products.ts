import { Product } from "@prisma/client";
import { instance } from "./instance";
import { Routes } from "./routes";

export const search = async (query: string): Promise<Product[]> => {
	return (await instance.get<Product[]>(Routes.PRODUCTS_SEARCH, { params: { q: query } })).data;
};