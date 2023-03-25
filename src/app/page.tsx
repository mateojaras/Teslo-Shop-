"use client";
import { Typography } from "@mui/material";
import { ShopLayout } from "components/layouts";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<ShopLayout
			title={"Teslo-Shop - Home"}
			pageDescription={"Encuentra los mejores productos de Teslo aqui"}
		>
			<Typography variant="h1" component="h1">
				Tienda
			</Typography>
			<Typography variant="h2" sx={{ mb: 1 }}>
				Todos los productos
			</Typography>
		</ShopLayout>
	);
};

export default Home;
