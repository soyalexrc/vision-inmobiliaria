import { useNavigate } from 'react-router-dom'
// material
import { Box, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PropTypes from "prop-types";

RedirectButton.propTypes = {
  text: PropTypes.string,
  goBack: PropTypes.bool,
  color: PropTypes.string,
}

export default function RedirectButton({ text, goBack, color, url, ...other }) {
  const navigate = useNavigate();

  function goTo() {
    if (url) {
      return navigate(url)
    }
  }

  return (
    <Box
      onClick={() => goTo()}
      {...other}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": { opacity: 0.7 },
      }}
    >
      <ExpandCircleDownIcon
        sx={{ transform: goBack ? "rotate(90deg)" : "rotate(-90deg)", mr: 1 }}
        color={color ? color : 'secondary'}
      />
      <Typography component={'div'} variant="caption">{text ? text : 'Go!'}</Typography>
    </Box>
  );
}
