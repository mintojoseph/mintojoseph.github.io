import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Resume-minto-with-pic.pdf`;
    link.href = "./Resume-minto-with-pic.pdf";
    link.click();
     };

  return (
    // <AppBar position="static">
       <AppBar>
      <Toolbar sx= {{backgroundColor: 'grey'}}>
        <Typography align="left" variant="h6" sx={{ flexGrow: 1 }} >
          Minto Joseph
        </Typography>
        {/* <Button color="inherit" component={RouterLink} to="/"
                  sx={{
                    '&:hover': {
                      color: 'white'
                    },
                    '&:focus': {
                      outline: 'none'
                    }
                  }}
        >
          Home
        </Button> */}
        <Button color="inherit" onClick={onDownload} 
                  sx={{
                    '&:hover': {
                      color: 'white'
                    },
                    '&:focus': {
                      outline: 'none'
                    }
                  }}
        >
            
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;