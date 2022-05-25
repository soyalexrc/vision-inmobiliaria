// material
import {styled} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
// mantenedorAdmin
import Page from "../components/common/Page.js";
import ContactForm from "../components/forms/ContactForm";
import moment from 'moment';
import {useCallback, useEffect, useRef, useState} from 'react';


// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function ComingSoon({eventTime = '9999999999', interval = '1000'}) {

  const calculateDuration = eventTime => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds');


  const [duration, setDuration] = useState(calculateDuration(eventTime));
  const timerRef = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(eventTime));
  }, [eventTime])

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, interval);

    return () => {
      clearInterval(timerRef.current);
    }
  }, [eventTime]);

  return (
    <RootStyle title="Proximamente | Vision Inmobiliaria">
      <Box sx={{
        backgroundColor: '#95D329',
        width: '100%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Typography variant='h1' color='#fff' align='center'>TE ESPERAMOS EN NUESTRA WEB</Typography>
        <Typography sx={{fontSize: {xs: '2.9rem', sm: '4rem', md: '5rem'}}} fontWeight='bold' color='#fff'
                    align='center'>PRÓXIMAMENTE</Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Box>
            <Typography fontSize='3.5rem' fontWeight='bold' color='#fff' align='center'>{duration.days()}</Typography>
            <Typography variant='h1' color='#fff' align='center'>Dias</Typography>
          </Box>
          <Box sx={{mx: 2}}>
            <Typography fontSize='3.5rem' fontWeight='bold' color='#fff' align='center'>{duration.hours()}</Typography>
            <Typography variant='h1' color='#fff' align='center'>Hrs</Typography>
          </Box>
          <Box sx={{mx: 2}}>
            <Typography fontSize='3.5rem' fontWeight='bold' color='#fff' align='center'>{duration.minutes()}</Typography>
            <Typography variant='h1' color='#fff' align='center'>Min</Typography>
          </Box>
          <Box>
            <Typography fontSize='3.5rem' fontWeight='bold' color='#fff' align='center'>{duration.seconds()}</Typography>
            <Typography variant='h1' color='#fff' align='center'>Seg</Typography>
          </Box>
        </Box>
        {/*<MotionContainer initial="initial" open>*/}
        {/*  <motion.div variants={varBounceIn}>*/}
        {/*  </motion.div>*/}
        {/*</MotionContainer>*/}
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4}}>
        <Typography variant='h3'>¿Necesitas ayuda?</Typography>
      </Box>
      <ContactForm/>
    </RootStyle>
  );
}
