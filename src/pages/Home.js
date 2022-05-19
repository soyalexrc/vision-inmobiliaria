import Page from '../components/Page'
import {styled} from "@mui/material/styles";
import Searcher from "../components/Searcher";
import banner from '../assets/img/banner-example.jpg'
import {Box} from "@mui/material";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
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
      title='Vision Inmobiliaria | Home'
      meta='El mejor sitio para encontrar tu hogar ideal y mucho mas!'
    >
      <Box sx={{ position: 'relative', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box component='img' sx={{ position: 'absolute', zIndex: '-1', filter: 'grayscale(50%)', height: '100%', width: '100%' }} src={banner} loading='lazy' alt=""/>
        <Searcher/>
      </Box>
    </RootStyle>
  )
}
