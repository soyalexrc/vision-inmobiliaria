import {Box, Typography} from "@mui/material";
import banner from "../../assets/img/advertisers-banner.jpg";

export default function AdvertisersBanner() {
  return (
    <Box
      sx={{position: 'relative', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }}/>
      <Box component='img' sx={{position: 'absolute', zIndex: '-1', height: '100%', width: '100%'}} src={banner}
           loading='lazy' alt=""/>
      <Box sx={{
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Box sx={{width: '50%'}}>
          <Typography variant='h1' align='center' color='#fff'>
            Consigue el asesor perfecto para ti!
          </Typography>
          <Typography variant='body1' color='#fff' align='center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
