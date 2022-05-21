import React, {useRef} from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
// material
import {styled, useTheme} from "@mui/material/styles";
import {Box, Card, CardContent, CardMedia, Divider, Tooltip, Typography,} from "@mui/material";
// utils
import {CarouselControlsPagingBelow} from "./controls";
// import ImgLabel from "../machines/ImgLabel";
// import {useNavigate} from "react-router-dom";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import exampleSellImg from '../../assets/img/sell-example.png'

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({theme}) => ({
  overflow: "hidden",
  position: "relative",
  "&:before, &:after": {
    top: 0,
    left: 0,
    zIndex: 8,
    width: 48,
    content: "''",
    height: "100%",
    display: "none",
    position: "absolute",
    [theme.breakpoints.up(480)]: {
      display: "block",
    },
  },
  "&:after": {
    right: 0,
    left: "auto",
    transform: "scaleX(-1)",
  },
  "& .slick-track": {
    display: "inline-flex",
  },
  "& .slick-arrow": {
    display: "none !important",
  },
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({item}) {
  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

  // const navigate = useNavigate();

  // const goToDetail = (item) => {
  //   return navigate(`/maquinas/${item.Seo.Slug}`)
  // }
  return (
    <Card sx={{
      mx: 2,
      mb: 3,
      width: 250,
      position: 'relative',
    }}
          // onClick={() => goToDetail(item)}
    >
      <Box sx={{position: 'relative'}}>
        <CardMedia
          component="img"
          loading='lazy'
          alt='alternative text'
          image={exampleSellImg}
          width='100%'
          height='100%'
          sx={{
            maxHeight: 238,
            height: 190,
            maxWidth: {md: 256},
            width: '100%',
            objectFit: {xs: 'cover'}
          }}
        />
      </Box>

        {/*<ImgLabel label={item.Texto_Promocional} />*/}
      {/*{*/}
      {/*  item.Es_Nuevo &&*/}
      {/*  <ImgLabel label='Nuevo' secondLabel={item.Texto_Promocional}/>*/}
      {/*}*/}
      <Divider/>
      <CardContent>
        <Typography variant="caption" color="primary.dark">
          Ubicacion de inmueble
        </Typography>
        <Typography variant="h6">Descripcion de inmueble...</Typography>
        <Box sx={{minHeight: '106px'}}>
            <>
              <Typography variant="caption">Venta</Typography>
              <Typography variant="h6" color="primary.dark" sx={{mb: 1}}>
                $ {addCommas(removeNonNumeric(150000))} + IVA
              </Typography>
            </>

            <>
              <Typography variant="caption">Arriendo</Typography>
              <Typography variant="h6" color="secondary.dark" sx={{mb: 1}}>
                $ {addCommas(removeNonNumeric(25000))} + IVA
              </Typography>
            </>
        </Box>

        <Box sx={{my: 2}}>
          <Typography variant='body1'>
            Calificacion:
          </Typography>
          <Tooltip title={
            <>
                  <Typography >Valor: 3 / 7</Typography>
                  <Typography >Valor: 3 / 7</Typography>
                  <Typography >Valor: 3 / 7</Typography>
            </>
          }>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <MilitaryTechIcon color='primary'/>
              <Typography variant='h5'>
                5/
                <span style={{fontSize: '16px', marginLeft: '5px'}}>10</span>
              </Typography>
            </Box>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function FeaturedCarousel({arr}) {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    dots: true,
    slidesToShow: 4,
    infinite: false,
    // centerMode: true,
    // centerPadding: "60px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {slidesToShow: 3},
      },
      {
        breakpoint: 600,
        settings: {slidesToShow: 2},
      },
      {
        breakpoint: 480,
        settings: {slidesToShow: 1.2, centerPadding: "0"},
      },
    ],
    ...CarouselControlsPagingBelow({
      sx: {mt: 3},
    }),
  };

  return (
    <RootStyle>
      <Typography variant='h3' align='center' sx={{ my: 3 }}>Inmuebles destacados</Typography>
      <Slider ref={carouselRef} {...settings}>
        {arr.map((item, i) => (
          <CarouselItem key={item + i}/>
        ))}
      </Slider>
    </RootStyle>
  );
}
