import {styled} from "@mui/material/styles";
import {grey} from "@mui/material/colors";
import {Link as RouterLink} from "react-router-dom";
import {Box, Container, Divider, Grid, Link, Typography} from "@mui/material";
import Logo from '../assets/img/logo.png'
import mail from '../assets/icons/mail.svg'
import {MHidden} from "../components/@material-extend";

const RootStyle = styled("div")(({theme}) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  borderTop: ".6rem solid " + grey[100],
  // boxShadow: '0px -5px 6px -3px lightgray',
  borderBottom: "1rem solid " + theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    // borderTop: "3rem solid " + grey[100],
  },
}));

export default function Footer() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{py: 10}}>
        <Grid
          container
          justifyContent={{xs: "center", md: "space-between"}}
          sx={{textAlign: {xs: "center", md: "left"}}}
        >
          <Grid
            item
            xs={6}
            md={3}
            sx={{display: "flex", alignItems: "center"}}
          >
            <Box
              component='img'
              src={Logo}
              sx={{
                // height: {xs: 70, sm: 100},
                height: 'auto',
                width: {xs: 'auto', sm: 100},
                display: "block",
                mx: 0,
                mb: {xs: 2, md: 0},
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            sx={{display: "flex", alignItems: "center", pr: 1}}
          >
            <Box
              component='img'
              src={Logo}
              sx={{
                // height: {xs: 70, sm: 100},
                height: 'auto',
                width: {xs: 'auto', sm: 100},
                display: "block",
                mx: 0,
                mb: {xs: 2, md: 0},
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{mt: {xs: 2, md: 0}}}>
            <Link
              component={RouterLink}
              to="/"
              sx={{color: "#000", "&:hover": {opacity: 0.7}, cursor: "pointer",}}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  mb: 2,
                  mx: 2,
                  "&:hover": {opacity: 0.7},
                }}
              >
                {/*<ExpandCircleDownIcon*/}
                {/*  sx={{transform: "rotate(-90deg)", mr: 1}}*/}
                {/*  color="primary"*/}
                {/*/>*/}
                <Typography variant="caption">

                  some link
                </Typography>
              </Box>
            </Link>

            <MHidden width="mdUp">
              <Divider/>
              <Box m={2}>
                <Grid container>
                  <Grid item xs={12} md={4} sx={{pb: {xs: 1}, textAlign: 'left'}}>
                    <Typography variant="caption" sx={{
                      fontSize: '0.875rem',
                      fontFamily: "Din-STD-Engschrift",
                      letterSpacing: '0.8px',
                      textTransform: "uppercase"
                    }}>
                      <RouterLink
                        style={{color: '#000', textDecoration: 'none'}}
                        to='/'
                        target="_blank"
                        download>titulo
                      </RouterLink>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{pb: {xs: 1}, textAlign: 'left'}}>
                    <Typography variant="caption" sx={{
                      fontSize: '0.875rem',
                      fontFamily: "Din-STD-Engschrift",
                      letterSpacing: '0.8px',
                      textTransform: "uppercase"
                    }}>
                      <RouterLink
                        style={{color: '#000', textDecoration: 'none'}}
                        to='/'
                        target="_blank"
                        download>titulo
                      </RouterLink>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              }
            </MHidden>

            <Divider/>

            <Box m={2} textAlign="left">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant='caption'>
                    link title
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mt: "3px",
                      "&:hover": {opacity: 0.7},
                    }}
                  >
                    <Box
                      component='img'
                      src={mail}
                      sx={{
                        // height: {xs: 70, sm: 100},
                        height: 'auto',
                        width: 30,
                        display: "block",
                        mr: 1,
                        mb: {xs: 2, md: 0},
                      }}
                    />
                    <Typography variant="caption">link value</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='caption'>
                    link title
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mt: "3px",
                      "&:hover": {opacity: 0.7},
                    }}
                  >
                    <Box
                      component='img'
                      src={mail}
                      sx={{
                        // height: {xs: 70, sm: 100},
                        height: 'auto',
                        width: 30,
                        display: "block",
                        mr: 1,
                        mb: {xs: 2, md: 0},
                      }}
                    />
                    <Typography variant="caption">link value</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='caption'>
                    link title
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mt: "3px",
                      "&:hover": {opacity: 0.7},
                    }}
                  >
                    <Box
                      component='img'
                      src={mail}
                      sx={{
                        // height: {xs: 70, sm: 100},
                        height: 'auto',
                        width: 30,
                        display: "block",
                        mr: 1,
                        mb: {xs: 2, md: 0},
                      }}
                    />
                    <Typography variant="caption">link value</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <MHidden width="mdDown">
              <Divider/>
              <Box mt={2} mx={2}>
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="caption"
                      sx={{fontFamily: "Din-STD-Engschrift", textTransform: "uppercase"}}>
                      <a
                        style={{color: '#000', textDecoration: 'none'}}
                        href='/'
                        target="_blank"
                        rel="noreferrer"
                        download>
                        Descargable
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="caption"
                      sx={{fontFamily: "Din-STD-Engschrift", textTransform: "uppercase"}}>
                      <a
                        style={{color: '#000', textDecoration: 'none'}}
                        href='/'
                        target="_blank"
                        rel="noreferrer"
                        download>
                        Descargable
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </MHidden>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  )
}
