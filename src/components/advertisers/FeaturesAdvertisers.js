import {Box, Container, Grid, Paper, Rating, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import advertiser from '../../assets/img/advertiser-example.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {useNavigate} from 'react-router-dom'

export default function FeaturesAdvertisers() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4}}>
        <StarIcon color='primary'/>
        <Typography variant='h3'>Asesores destacados</Typography>
      </Box>

      <Grid container spacing={2} sx={{mb: 3}}>
        {
          [1, 2, 3].map((el, i) => (
            <Grid key={el + i} item xs={12} md={4}>
              <Paper
                onClick={() => navigate('/asesores/nombre-de-asesor')}
                elevation={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 3,
                  "&:hover": {
                    cursor: 'pointer',
                    "& img" : {
                      border: `4px solid #97d700`,
                      transition: 'border 500ms ease'
                    },
                    "& h6" : {
                      color: theme => theme.palette.primary.main,
                      transition: 'color 200ms ease'
                    }
                  }
              }}>
                <Box
                  component='img'
                  src={advertiser}
                  sx={{borderRadius: '50%', mr: 4, border: '4px solid transparent'}}
                  width={96}
                  height={96}
                />
                <Box>
                  <Typography variant='h6'>Lucia Perez</Typography>
                  <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                    <Rating name="read-only" value={4} readOnly/>
                    <Typography variant='body1'>(39)</Typography>
                  </Box>
                  <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <LocalPhoneIcon color='secondary'/>
                    <Typography variant='body2'>+58 992 992 992</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}
