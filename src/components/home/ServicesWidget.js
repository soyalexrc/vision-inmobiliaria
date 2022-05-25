// material
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
// mantenedorAdmin
import RedirectButton from "../RedirectButton";
import services from '../../utils/mock/services'
import {useState} from "react";
import exImgDesktop from '../../assets/img/dummy.png'

const ImgStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 200,
  objectFit: "cover",
  borderRadius: 8,
}));

export default function ServicesWidget() {
  const [data, setData] = useState(services)
  return (
    <Container  sx={{ py: { xs: 5, md: 10 } }}>
      <Typography variant="h2" align="center" sx={{ mb: 2 }}>
        Servicios
      </Typography>
      <Grid container spacing={2}>
        {
          data.map((service) => (
            <Grid item xs={6} md={4} key={service._id}>
              <Paper elevation={4} sx={{ mb: 2 }}>
                <ImgStyled
                  component="img"
                  loading='lazy'
                  alt={service.alt}
                  src={exImgDesktop}
                />
              </Paper>
              <Typography variant="h6">{service.title}</Typography>
              <RedirectButton url='/servicios'/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
