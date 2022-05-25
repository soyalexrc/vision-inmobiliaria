import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet }  from 'react-router-dom';


export default function LogoOnlyLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Outlet />
    </Box>
  );
}
