import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: useTheme().spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();

  return (
        <AppBar position="fixed">
          <Container fixed>
            <Toolbar>
              <IconButton edge="start" color="inherit" area-label="menu" className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" className={classes.title}>Обменка</Typography>
              <Box  mr={3}>
                <Button color="inherit" variant="outlined">Log In</Button>
              </Box>
              <Button color="secondary" variant="contained">Sign Up</Button>
            </Toolbar>
          </Container>
        </AppBar>
  );
}

export default App;
