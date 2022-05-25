import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
// mantenedorAdmin
import { MotionContainer, varBounceIn } from "../components/animate";
import Page from "../components/common/Page";
import { PageNotFoundIllustration } from "../assets/ilustration_404";
import logo from '../assets/img/logo.png'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function NotFound() {
  return (
    <RootStyle title="404 Page Not Found | Go!Tec">
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <img src={logo} width={150} alt=""/>
        </Box>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Lo sentimos, ¡página no encontrada!
              </Typography>
            </motion.div>
            <Typography sx={{ color: "text.secondary" }}>
              Lo sentimos, no pudimos encontrar la página que estás buscando.
              ¿Quizás has escrito mal la URL? Asegúrese de revisar su
              ortografía.
            </Typography>

            <motion.div variants={varBounceIn}>
              <PageNotFoundIllustration
                sx={{ height: 260, my: { xs: 5, sm: 10 } }}
              />
            </motion.div>

            <Button
              to="/"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Volver al home
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
