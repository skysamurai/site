import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Grid,
  Toolbar,
  Typography,
  MenuItem,
  TextField, Select, FormControl, InputLabel
} from '@mui/material';
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
    marginTop: useTheme().spacing(14),
  },
  cryptoInputBox: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: "space-between",
  },
  currencyInput: {
    minWidth: '80%',
  },
  currencyType: {
    minWidth: '32%',
  },
  // formControl: {
  //   margin: useTheme().spacing(1),
  //   minWidth: 120,
  // },
}));


function App() {
  const classes = useStyles();

  return (
      <>
    <AppBar position="fixed">
      <Container maxWidth={"lg"}>
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
        <Container maxWidth={"lg"}>
          <Grid container spacing={3} columns={14}>
            <Grid item xs={10}>
              <Paper>10</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                <div className={classes.cryptoInputBox}>
                  <FormControl sx={{mr:0.1, mt:2, minWidth: '67%' }} className={classes.currencyInput}>
                    <TextField  label="Вы продаете"/>
                  </FormControl>
                  <FormControl sx={{ml:0.1, mt:2, minWidth: '32%' }} className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                    <Select value={''} autoWidth label="Age">
                      <MenuItem value="">Валюта</MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.cryptoInputBox}>
                  <FormControl sx={{mr:0.1, mt:2, minWidth: '67%'}} className={classes.currencyInput}>
                    <TextField  label="Вы получаете"/>
                  </FormControl>
                  <FormControl sx={{ml:0.1, mt:2, minWidth: '32%'}} className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                    <Select value={''} autoWidth label="Валюта">
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>

< />
  );
}

export default App;
