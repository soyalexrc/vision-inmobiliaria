// material
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)(() => ({
  padding: "14px 16px 8px 16px",
  borderBottom: "solid",
  borderRight: "solid",
  borderWidth: 2,
  borderColor: grey[100],
}));

const AccordionStyle = styled(Accordion)(() => ({
  borderBottom: "solid",
  borderRight: "solid",
  borderWidth: 2,
  borderColor: grey[100],
  borderRadius: "0 !important",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
    boxShadow: "none",
  },
  "& .MuiAccordionSummary-content": {
    margin: "15px 0 11px 0 !important",
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "15px 0  11px 0 !important",
  },
  "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
    minHeight: "48px",
  },
  "& .MuiAccordionDetails-root": {
    padding: "0px 16px 16px",
  },
}));

// ----------------------------------------------------------------------

export default function FiltersDesktop() {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <BoxStyle>
        <Typography variant="h6">Inmuebles</Typography>
        <Typography variant="h6" sx={{ fontSize: "12pt !important" }}>
          30 RESULTADOS
        </Typography>
      </BoxStyle>

      <AccordionStyle defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">ACTIVIDAD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="body1">Arriendo (10)</Typography>}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="body1">Compra (20)</Typography>}
            />
          </FormGroup>
        </AccordionDetails>
      </AccordionStyle>

      <AccordionStyle defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">INDUSTRIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="body1">Cárnica (4)</Typography>}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body1">Fruta y verdura (10)</Typography>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="body1">Panadería (6)</Typography>}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="body1">Pesquera (10)</Typography>}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="body1">Vegano (20)</Typography>}
            />
          </FormGroup>
        </AccordionDetails>
      </AccordionStyle>

      <AccordionStyle defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">PRODUCTO FINAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body1">Listado por mandar</Typography>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body1">Listado por mandar</Typography>
              }
            />
          </FormGroup>
        </AccordionDetails>
      </AccordionStyle>

      <AccordionStyle defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">MARCA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body1">Listado por mandar</Typography>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body1">Listado por mandar</Typography>
              }
            />
          </FormGroup>
        </AccordionDetails>
      </AccordionStyle>
    </Box>
  );
}
