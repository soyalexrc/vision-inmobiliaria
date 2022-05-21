import {styled} from "@mui/material/styles";
import Page from "../../components/common/Page";
import {Box, Divider, Typography} from "@mui/material";
import banner from "../../assets/img/advertisers-banner.jpg";
import Searcher from "../../components/Searcher";
import AdvertisersBanner from "../../components/advertisers/AdvertisersBanner";
import FeaturesAdvertisers from "../../components/advertisers/FeaturesAdvertisers";
import RegularAdvertisers from "../../components/advertisers/RegularAdvertisers";

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

export default function Advisers() {
  return (
    <RootStyle
      title='Agentes | Vision Inmobiliaria '
      meta='Consigue el personal mas capacitado!, estamos contentos de recibirte y brindarte la mejor experiencia.'
    >
      <AdvertisersBanner />
      <FeaturesAdvertisers />
      <Divider sx={{my: 5}}/>
      <RegularAdvertisers />
    </RootStyle>
  )
}
