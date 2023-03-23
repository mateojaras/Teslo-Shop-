import type { AppProps } from "next/app";
import "../../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "themes";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
