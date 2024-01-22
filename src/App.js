import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Paper, Grid, Toolbar, Typography} from '@mui/material';
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
  },
  currencyTable: {
    position: "relative",
    color: useTheme().palette.common.white,
    marginBottom: useTheme().spacing(4),
  }
}));


function App() {
  const classes = useStyles();

  return (
      <>
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
    <main>
      <Paper className={classes.currencyTable}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>12</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>6</Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>

< />
  );
}

export default App;
