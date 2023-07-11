"use client";
import NextLink from "next/link";
import { Chip, Grid, Link, Typography } from "@mui/material";
import {
	DataGrid,
	GridColDef,
	GridRenderCellParams,
	GridRowsProp,
} from "@mui/x-data-grid";
import { ShopLayout } from "components/layouts";
import React from "react";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 100 },
	{ field: "fullname", headerName: "Nombre Completo", width: 300 },
	{
		field: "paid",
		headerName: "Pagada",
		description: "Muestra informacion si esta pagada la orden o no",
		width: 200,
		renderCell: (params: GridRenderCellParams) => {
			return params.row.paid ? (
				<Chip color="success" label="Pagada" variant="outlined" />
			) : (
				<Chip color="error" label="No Pagada" variant="outlined" />
			);
		},
	},
	{
		field: "order",
		headerName: "Ver orden",
		width: 200,
		sortable: false,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
					<Link underline="always">Ver orden</Link>
				</NextLink>
			);
		},
	},
];

const rows: GridRowsProp = [
	{ id: 1, paid: true, fullname: "Fernando Herrera" },
	{ id: 2, paid: false, fullname: "Melissa FLorez" },
	{ id: 3, paid: true, fullname: "Mateo Jaras" },
	{ id: 4, paid: false, fullname: "Caremonda Jaramillo" },
	{ id: 5, paid: true, fullname: "Pelame lacuca" },
];

const HistoryPage = () => {
	return (
		<ShopLayout
			title={"Historial de ordenes"}
			pageDescription={"Historial de ordenes"}
		>
			<Typography variant="h1" component={"h1"}>
				Historial de ordenes
			</Typography>
			<Grid container>
				<Grid item xs={12} sx={{ height: 650, width: "100%" }}>
					<DataGrid columns={columns} rows={rows} />
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default HistoryPage;
