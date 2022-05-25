import {styled} from "@mui/material/styles";
import Page from "../components/common/Page";
import ServicesBanner from "../components/services/ServicesBanner";
import BreadCrumb from "../components/BreadCrumb";
import {Container, Typography} from "@mui/material";
import ServiceCard from "../components/services/ServicesCard";
import services from '../utils/mock/services'
import {useState} from "react";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}));

export default function Services() {
  const [data, setData] = useState(services)
  return (
    <RootStyle
      title='Servicios | Vision Inmobiliaria '
      meta='Consigue el mejor servicio para ti!, estamos contentos de recibirte y brindarte la mejor experiencia.'
    >
      <Container sx={{pb: 4}}>
        <BreadCrumb first={{text: 'Servicios', url: '/servicios'}}/>
      </Container>
      <ServicesBanner/>
      <Container maxWidth='md' align='center' sx={{pb: {xs: 5, md: 10}}}>
        <Typography variant="h1" align="left" sx={{py: {xs: 5, md: 10}}}>
          Nuestros Servicios
        </Typography>

        {
          data.map((service, i) => (
            <ServiceCard
              key={service._id}
              title={service.title}
              text={service.text}
              img={service.imgDesktop }
              imgMobile={service.imgMobile }
              alt={service.alt}
              number={i + 1}
              banner={service.banner}
              largeCard={service.list.length > 0 && service.list[0].length > 0}
              list={service.list}
            />
          ))
        }
      </Container>

    </RootStyle>
  )
}
