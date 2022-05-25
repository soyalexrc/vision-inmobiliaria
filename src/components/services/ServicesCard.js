import {Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from "prop-types";
import {MHidden} from "../@material-extend";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import exImgDesktop from '../../assets/img/dummy.png'
import exImgMobile from '../../assets/img/dummy.png'

//----------------------------------------------------------------

const LargeBoxCard = styled(Box)(({theme}) => ({
  "& img": {
    width: ' 100%',
    objectFit: 'cover'
    // height: '100%',
    // maxHeight: '288px'
  },

  "& .giant-icon": {
    fontSize: '5rem',
    transform: 'rotate(0.05turn)'
  },
  [theme.breakpoints.down('md')]: {
    "& .giant-icon": {
      fontSize: '3rem'
    }
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
    "& img": {
      objectFit: 'inherit',
      width: '100%',
      height: '350px'
    }
  },

  [theme.breakpoints.down("xs")]: {
    "& img": {
      height: '250px'
    }
  },
}))

const BoxCard = styled(Box)(({theme}) => ({

  "& img": {
    width: ' 305px',
    objectFit: 'cover'
    // height: '100%',
    // maxHeight: '288px'
  },
  "& .giant-icon": {
    fontSize: '5rem',
    transform: 'rotate(0.05turn)'
  },
  [theme.breakpoints.down('md')]: {
    "& .giant-icon": {
      fontSize: '3rem'
    }
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
    "& img": {
      width: '100%',
      height: '350px'
    }
  },

  [theme.breakpoints.down("xs")]: {
    "& img": {
      height: '250px'
    }
  },
}));

//----------------------------------------------------------------

ServiceCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  banner: PropTypes.string,
  largeCard: PropTypes.bool,
}

function ServiceCard({img, title, text, banner, largeCard, number, list, alt, imgMobile}) {

  const catchHtml = (html) => {
    return {
      __html: html
    }
  }

  const RegularCard = () => {
    return (
      <BoxCard
        sx={{
          boxShadow: "0px 3px 6px #00000029",
          borderRadius: 1,
          display: 'flex',
          mb: 5,
          position: 'relative',
        }}
      >
        <MHidden width='mdDown'>
          <img src={exImgDesktop} alt={alt} />
        </MHidden>
        <MHidden width='mdUp'>
          <img src={exImgMobile} alt={alt} />
        </MHidden>
        <Box sx={{
          px: {xs: 2, md: 4},
          py: 2,
        }}>
          <Typography mb={1} align="left" variant="h2">{title}</Typography>
          <Typography mb={3} align="left" variant="body1" dangerouslySetInnerHTML={catchHtml(text)}/>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Typography variant="h3" style={{ fontSize: '1.2rem' }} align="left" color="#98989A" dangerouslySetInnerHTML={catchHtml(banner)}/>
            <Typography variant="h4" color={theme => theme.palette.primary.main}>
              <PriorityHighIcon className='giant-icon'/>
            </Typography>
          </Box>
        </Box>
        <MHidden width='mdDown'>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#93D500',
              color: '#fff',
              fontSize: '3rem',
              fontWeight: 'bold'
            }}
          >
            {number}.
          </Box>
        </MHidden>
        <MHidden width='mdUp'>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#93D500',
              color: '#fff',
              fontSize: '3rem',
              fontWeight: 'bold'
            }}
          >
            {number}.
          </Box>
        </MHidden>
      </BoxCard>
    )
  }



  function LargeCard({arr}) {
    const features = JSON.stringify(arr)
      .replaceAll('[', '')
      .replaceAll(']', '')
      .replaceAll('"', '')
      .split(',');
    return (
      <LargeBoxCard
        sx={{
          boxShadow: "0px 3px 6px #00000029",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Box sx={{position: 'relative'}}>
          <MHidden width='mdDown'>
            <img src={exImgDesktop} height='350px' alt={alt} />
          </MHidden>
          <MHidden width='mdUp'>
            <img src={exImgMobile} alt={alt} />
          </MHidden>
          <MHidden width='mdDown'>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 80,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#93D500',
                color: '#fff',
                fontSize: '3rem',
                fontWeight: 'bold'
              }}
            >
              {number}.
            </Box>
          </MHidden>
          <MHidden width='mdUp'>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 80,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#93D500',
                color: '#fff',
                fontSize: '3rem',
                fontWeight: 'bold'
              }}
            >
              {number}.
            </Box>
          </MHidden>
        </Box>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Box sx={{
              pt: {xs: 2, md: 4},
              pl: {xs: 2, md: 4},
              pr: {xs: 2, md: 0},
            }}>
              <Typography mb={1} align="left" variant="h2">{title}</Typography>
              <Typography mb={3} align="left" variant="body1" dangerouslySetInnerHTML={catchHtml(text)}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            mb: {xs: 2}
          }}>
            <Box sx={{
              mt: {xs: 2, md: 12},
              pl: {xs: 2, md: 0},
            }}>
              <Typography align="left">
                Consiste en:
              </Typography>
              <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {
                  features && features.length > 0 && features.map((item, i) => (
                    <ListItem key={i + 1} sx={{p: 0}}>
                      <ListItemIcon>
                        <CheckIcon color="success"/>
                      </ListItemIcon>
                      <ListItemText primary={item}/>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{
          pb: {xs: 2, md: 4},
          px: {xs: 2, md: 4}
        }}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Typography variant="h3" style={{ dontSize: '1.2rem' }} align="left" color="#98989A" dangerouslySetInnerHTML={catchHtml(banner)}/>
            <Typography variant="h4" color={theme => theme.palette.primary.main}>
              <PriorityHighIcon className='giant-icon'/>
            </Typography>
          </Box>
        </Box>
      </LargeBoxCard>
    )
  }

  if (largeCard) {
    return <LargeCard arr={list}/>
  } else {
    return <RegularCard/>
  }
};


export default ServiceCard;
