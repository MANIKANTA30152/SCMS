import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar color="inherit" position="static">
        <Toolbar>
        <Link to='/Reg'>Register</Link>
        &nbsp; &nbsp; 
        <Link to='/B'>Back</Link>
        &nbsp; &nbsp; 
        <Link to='/Sho'>Show</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}