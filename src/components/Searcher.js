import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  TextField,
  Typography
} from "@mui/material";
import {useState} from "react";
import {styled} from "@mui/material/styles";

const options = [
  {title: 'Venta', value: 0, id: 1},
  {title: 'Alquiler', value: 1, id: 2},
  {title: 'Alquiler por dia', value: 2, id: 3},
  {title: 'Traspaso de negocio', value: 3, id: 4},
]

const StyledBox = styled(Box)(({theme}) => ({
  "& .option": {
    cursor: 'pointer',
    padding: '1rem 2rem',
    "&:hover" : {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    }
  },
}));

export default function Searcher() {
  const [someValue, setSomeValue] = useState('');
  const [range, setRange] = useState([0, 10000]);
  const [selected, setSelected] = useState(0);

  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "")

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  function handleSelected(value) {
    setSelected(value);
  }


  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <StyledBox>
      <Box sx={{display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: 'white'}}>
          {
            options.map((option, i, arr) => (
              <Typography
                onClick={() => handleSelected(option.value)}
                className='option'
                sx={{
                  borderTopLeftRadius: i === 0 ? '10px' : 0,
                  backgroundColor: selected === option.value && 'primary.main',
                  color: selected === option.value && 'white',
                  borderTopRightRadius: i === arr.length - 1 ? '10px' : 0,
                }}
              >
                {option.title}
              </Typography>
            ))
          }
        </Box>
      </Box>
      <Paper elevation={2} sx={{mx: 5, display: 'flex', p: 2}}>
        <FormControl sx={{width: '13rem'}}>
          <InputLabel id="type-of-inmueble-label-id">Tipo de inmueble</InputLabel>
          <Select
            labelId="Type-of-inmueble-label"
            id="demo-simple-select"
            value={someValue}
            displayEmpty
            label="Tipo de inmueble"
            inputProps={{'aria-label': 'Without label'}}
            onChange={(e) => setSomeValue(e.target.value)}
          >
            <MenuItem value={10}>Apartamento</MenuItem>
            <MenuItem value={20}>Casa</MenuItem>
            <MenuItem value={30}>Townhouse</MenuItem>
            <MenuItem value={40}>Local</MenuItem>
            <MenuItem value={50}>Oficina</MenuItem>
            <MenuItem value={60}>Galpon</MenuItem>
            <MenuItem value={70}>Terreno</MenuItem>
            <MenuItem value={80}>Habitacion</MenuItem>
            <MenuItem value={90}>Anexo</MenuItem>
          </Select>
        </FormControl>
        <TextField type='text' fullWidth/>
        <Button variant='contained' sx={{ color:" white" }}>Buscar</Button>
      </Paper>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{width: 300, px: 3, py: 2, my: 2}}>
          <Typography align='center' variant='h5'>Rango de precio</Typography>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={range}
            size='large'
            max={10000}
            min={0}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <small>{addCommas(removeNonNumeric(range[0]))} $</small>
            <small>{addCommas(removeNonNumeric(range[1]))} $</small>
          </Box>
        </Paper>
      </Box>
    </StyledBox>
  )
}
