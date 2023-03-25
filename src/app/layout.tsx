"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme } from "themes";
import "../../styles/globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
