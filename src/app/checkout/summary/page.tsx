"use client";
import NextLink from "next/link";
import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Grid,
	Link,
	Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "components/cart";
import { ShopLayout } from "components/layouts";
import React from "react";

const SummaryPage = () => {
	return (
		<ShopLayout
			title={"Resumen de orden"}
			pageDescription={"Resumen de la orden"}
		>
			<Typography variant="h1" component="h1">
				Resumen de la orden
			</Typography>
			<Grid container>
				<Grid item xs={12} sm={7} color="blue">
					<CartList />
				</Grid>
				<Grid item xs={12} sm={5} color="red">
					<Card className="summary-card">
						<CardContent>
							<Typography variant="h2">Resumen (3 productos)</Typography>
							<Divider sx={{ my: 1 }} />

							<Box display={"flex"} justifyContent={"end"}>
								<NextLink href={"/checkout/address"} legacyBehavior>
									<Link underline="always">Editar</Link>
								</NextLink>
							</Box>

							<Typography variant="h1">Direccion de entrega</Typography>
							<Typography>Fernando Herrera</Typography>
							<Typography>calle 93 # 107-21</Typography>
							<Typography>Chigorodo</Typography>
							<Typography>COlombia</Typography>
							<Typography>+57 3147768649</Typography>

							<Divider sx={{ my: 1 }} />

							<Box display={"flex"} justifyContent={"end"}>
								<NextLink href={"/cart"} legacyBehavior>
									<Link underline="always">Editar</Link>
								</NextLink>
							</Box>

							<OrderSummary />
							<Box sx={{ mt: 3 }}>
								<Button color="secondary" className="circular-btn" fullWidth>
									Checkout
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default SummaryPage;
