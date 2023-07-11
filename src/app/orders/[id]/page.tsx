"use client";
import NextLink from "next/link";
import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Divider,
	Grid,
	Link,
	Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "components/cart";
import { ShopLayout } from "components/layouts";
import React from "react";
import {
	CreditCardOffOutlined,
	CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
	return (
		<ShopLayout
			title={"Resumen de orden"}
			pageDescription={"Resumen de la orden"}
		>
			<Typography variant="h1" component="h1">
				Resumen de la orden
			</Typography>
			{/* <Chip
				sx={{ my: 2 }}
				label="Pendiente de pago"
				variant="outlined"
				color="error"
				icon={<CreditCardOffOutlined />}
			/> */}

			<Chip
				sx={{ my: 2 }}
				label="Pagada"
				variant="outlined"
				color="success"
				icon={<CreditScoreOutlined />}
			/>
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
								<h1>Pagar</h1>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default OrderPage;
