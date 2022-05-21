import {Link as RouterLink, useLocation} from "react-router-dom";
// material
import {styled} from "@mui/material/styles";
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
// hooks
import useOffSetTop from "../hooks/useOffsetTop";
// mantenedorAdmin
import Logo from "../logo.svg";
import {MHidden} from "../components/@material-extend";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import {Person} from "@mui/icons-material";
// redux

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({theme}) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

const ToolbarShadowStyle = styled("div")(({theme}) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(1);
  const {pathname} = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar sx={{boxShadow: 0, bgcolor: "transparent"}}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: "background.default",
            height: {md: APP_BAR_DESKTOP - 20},
          }),
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <RouterLink to="/">
            <img src={Logo} alt=""/>
          </RouterLink>

          <Box sx={{flexGrow: 1}}/>

          <MHidden width="mdDown">
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>

          <RouterLink to='/ingresar'>
            <IconButton aria-label="Iniciar sesion">
              <Person />
            </IconButton>
          </RouterLink>

          <MHidden width="mdUp">
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>
        </Box>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle/>}
    </AppBar>
  );
}
