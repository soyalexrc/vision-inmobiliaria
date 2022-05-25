import {Box, Typography} from '@mui/material';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import {styled} from '@mui/material/styles'
import {blueGrey} from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {MHidden} from "./@material-extend";
import PropTypes from "prop-types";


//--------------------------------------------------------------
const LinkStyle = styled(RouterLink)(({theme}) => ({
  ...theme.typography.caption,
  color: blueGrey[800],
  textDecoration: 'none',

  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.5,
  }
}));
//--------------------------------------------------------------


BreadCrumb.propTypes = {
  first: PropTypes.object,
  second: PropTypes.string,
  altText: PropTypes.string,
}

export default function BreadCrumb({ first, second, altText }){

  const formatLargeText = text => {
    if (text.length > 115) {
      return text.substring(0, 110).concat('...')
    } else {
      return text;
    }
  }

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Typography variant='caption'>
        <LinkStyle to="/">Home</LinkStyle>
      </Typography>
      <ArrowForwardIosIcon sx={{fontSize: '10px', mx: 1}}/>
      <Typography variant='caption'>
        <LinkStyle to={first.url}>{first.text}</LinkStyle>
      </Typography>
      {second &&
        <>
          <ArrowForwardIosIcon sx={{fontSize: '10px', mx: 1}}/>
          <MHidden width='mdDown'>
            <Typography variant='caption'>
              {formatLargeText(second)}
            </Typography>
          </MHidden>
          <MHidden width='mdUp'>
            <Typography variant='caption'>
              {altText}
            </Typography>
          </MHidden>
        </>
      }
    </Box>
  );
};

