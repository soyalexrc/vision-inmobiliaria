import { useState } from "react";
// material
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, TextField } from "@mui/material";
// components
import Page from "../../components/common/Page";
import FiltersDesktop from "../../components/products/FiltersDesktop";
import FiltersMobile from "../../components/products/FiltersMobile";
import SortDesktop from "../../components/products/SortDesktop";
import SortMobile from "../../components/products/SortMobile";
import Product from "../../components/products/Product";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: "100%",
  width: "100%",
  position: "relative",
  paddingTop: "calc(" + APP_BAR_MOBILE + "px + 1rem)",
  paddingBottom: "1rem",
  [theme.breakpoints.up("md")]: {
    paddingTop: "calc(" + APP_BAR_DESKTOP + "px + 1rem)",
    paddingBottom: "1rem",
  },
}));

// ----------------------------------------------------------------------

export default function Sell() {
  const [drawer, setDrawer] = useState(false);

  return (
    <RootStyle title="Inmuebles | Compra | Vision Inmobiliaria" id="move_top">
      <Container sx={{ pb: { xs: 2, md: 5 } }}>
        <TextField
          id="search"
          label="Buscar palabra, producto, noticia…"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Container>
      <Grid container>
        <Grid item xs={12} md={3}>
          <FiltersDesktop />
          <FiltersMobile setDrawer={setDrawer} drawer={drawer} />
        </Grid>
        <Grid item xs={12} md={9}>
          <SortDesktop />
          <SortMobile setDrawer={setDrawer} />

          <Box p={3}>
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6].map((element) => (
                <Grid item xs={12} md={6} key={element}>
                  <Product />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
