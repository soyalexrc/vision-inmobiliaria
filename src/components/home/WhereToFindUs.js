import {Container, Grid, Typography} from "@mui/material";
import CustomGoogleMap from "./CustomGoogleMap";

export default function WhereToFindUs() {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant='h3' align='center' sx={{ mb: 4 }}>¿Donde nos encuentras?</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography variant='h6'>Estamos ubicados en....</Typography>
          <Typography variant='body1'>Direccion</Typography>
          <Typography variant='body1'>Direccion</Typography>
          <Typography variant='body1'>Direccion</Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <CustomGoogleMap />
        </Grid>
      </Grid>
    </Container>
  )
}
