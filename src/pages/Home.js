import Page from '../components/common/Page'
import {styled} from "@mui/material/styles";
import Searcher from "../components/Searcher";
import banner from '../assets/img/banner-example.jpg'
import {Box, Button, Container, Divider, Typography} from "@mui/material";
import ws from '../assets/icons/ws.webp';
import AboutUs from "../components/home/AboutUs";
import WhereToFindUs from "../components/home/WhereToFindUs";
import FeaturedCarousel from "../components/carousel/FeaturedCarousel";
import CustomGoogleMap from "../components/home/CustomGoogleMap";
import FeaturesAdvertisers from "../components/advertisers/FeaturesAdvertisers";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;
const arr = [
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
]

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}));

export default function Home() {

  return (
    <RootStyle
      title='Home | Vision Inmobiliaria'
      meta='El mejor sitio para encontrar tu hogar ideal y mucho mas!'
    >
      <Box sx={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Box
          component='img'
          sx={{position: 'absolute', zIndex: '-1', filter: 'grayscale(50%)', height: '100%', width: '100%'}}
          src={banner} loading='lazy' alt=""/>
        <Searcher/>
      </Box>

      <Container sx={{my: 5}}>
        <FeaturedCarousel arr={arr}/>
      </Container>

      <Container sx={{my: 5}}>
        <FeaturesAdvertisers/>
        <Divider sx={{my: 5}}/>
      </Container>

      <AboutUs/>
      <Box sx={{textAlign: 'center', py: 5, backgroundColor: theme => theme.palette.secondary.main}}>
        <Typography variant='h2' color='#fff' sx={{mb: 2}}>Mira que propiedades han bajado de precio este
          mes!</Typography>
        <Button variant='contained' color='primary' sx={{color: '#fff'}}>Ver propiedades!</Button>
      </Box>

      <Box
        component='img'
        src={ws}
        width={80}
        onClick={() => window.open(' https://wa.me/51917902604', '_blank')}
        sx={{
          position: 'fixed',
          zIndex: 2,
          bottom: 25,
          right: 25,
          "&:hover": {
            cursor: 'pointer'
          }
        }}
      />
      <WhereToFindUs/>
    </RootStyle>
  )
}
