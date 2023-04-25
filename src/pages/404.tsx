import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { ShopLayout } from "components/layouts";
import { lightTheme } from "themes";

const Custom404 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <ShopLayout
        title={"Page not found"}
        pageDescription={"NO hay nada que mostrar aqui"}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          height="calc(100vh - 200px"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Typography
            variant="h1"
            component={"h1"}
            fontSize={80}
            fontWeight={150}
          >
            404 |
          </Typography>
          <Typography marginLeft={2}>
            No encontramos ninguna pagina aqui
          </Typography>
        </Box>
      </ShopLayout>
    </ThemeProvider>
  );
};

export default Custom404;
