import {Box, Grid, Paper, Rating, Typography} from "@mui/material";
import regularAdvertiser from "../../assets/img/regular-advertiser-example.jpg";
import {useNavigate} from 'react-router-dom'

export default function RegularAdvertisers() {
  const navigate = useNavigate()

  return (
    <Grid container spacing={2} sx={{ my: 5 }}>
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((el, i) => (
          <Grid key={el + 1} item xs={12} md={3}>
            <Paper
              onClick={() => navigate('/asesores/nombre-de-asesor')}
              elevation={2}
              sx={{
                textAlign: 'center',
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
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component='img'
                  src={regularAdvertiser}
                  sx={{borderRadius: '50%', border: '4px solid transparent'}}
                />
              </Box>
              <Typography variant='h6'>Jhonny Peralta</Typography>
              <Typography variant='body1'>(58) 999 999 999</Typography>
              <Box>
                <Rating name="read-only" value={3} readOnly/>
              </Box>
              <Typography variant='caption'>
                Real Estate Sales Force
                Agent License #: 3160356
                Real Estate Sales Force
                Agent License #: 3160356
              </Typography>
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  )
}
