import {Link as RouterLink, useNavigate} from "react-router-dom";
// material
import { grey } from "@mui/material/colors";
import { Box, Button, Typography, Rating } from "@mui/material";
import sellExample from '../../assets/img/sell-example.png'
import {styled} from "@mui/material/styles";

const BoxLayout = styled(Box)(({theme}) => ({
  display: 'flex',
  [theme.breakpoints.down(450)]: {
    flexDirection: 'column',
  }
}))

export default function Product() {
  const navigate = useNavigate();

  function goToDetail(product) {
    return navigate(`/inmuebles/ejemplo`);
  }

  return (
    <Box sx={{ boxShadow: "0px 3px 6px #00000029", width: "100%" }}>
      <Box
        sx={{
          px: 2,
          pt: 2,
          pb: "12px",
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: "solid",
          borderWidth: 1,
          borderColor: grey[100],
        }}
      >
        <Typography variant="h6">CUBETEADORA DE SEMI </Typography>
      </Box>
      <BoxLayout>
        <Box sx={{
          height: {xs: 220, sm: 242},
          width: {xs: '100%', sm: 190},
          mr: {md: 1},
          position: 'relative',
        }}>
          <img
            style={{height: '100%', objectFit: 'cover', width: '100%'}}
            src={sellExample} alt='some alt'/>
        </Box>
        <Box display="flex" alignItems="center" p={2}>
          <div>
            <Typography variant="caption">Precio compra</Typography>
            <Box display="flex" mb={1}>
              <Box border="1px solid #A8E62D" px={2} py="1px" bgcolor="#F9FFEF">
                Venta
              </Box>
              <Box
                border="1px solid #F7BE96"
                px={2}
                py="1px"
                bgcolor="#FFF2EA"
                ml={1}
              >
                Arriendo
              </Box>
            </Box>

            <Typography variant="caption">Precio compra</Typography>
            <Typography variant="h6" color="primary.dark" sx={{ mb: 1 }}>
              $6.000.000 + IVA
            </Typography>

            <Box display="flex" mb={2}>
              <Rating name="read-only" value={4} readOnly size="small" />
              <Box sx={{ ml: 2 }}>4,0</Box>
            </Box>

            <RouterLink to="/maquinas/producto" style={{ textDecoration: "none", color: "#3E5866" }}>
              <Button variant="contained" color="primary" size="small">
                Ver más
              </Button>
            </RouterLink>
          </div>
        </Box>
      </BoxLayout>
    </Box>
  );
}
