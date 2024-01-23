import React from 'react';
import Axios from "axios";

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
  TextField,
  Select,
  FormControl,
  InputLabel, TableCell, TableContainer, Table, TableHead, TableRow, TableBody
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import axios from "axios";

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
    marginBottom: 10,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: "space-between",
  },
  cryptoOutputBox: {
    marginBottom: 20,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function App() {
  const classes = useStyles();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
        .get('https://api.coincap.io/v2/rates')
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
  }, []);



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
              <TableContainer component={Paper} sx={{mb: 10}} align="left" >
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" width={100}>Отдаете</TableCell>
                      <TableCell align="left" width={20}>Тикер</TableCell>
                      <TableCell align="left" width={100}>Получаете</TableCell>
                      <TableCell align="left" width={20}>Тикер</TableCell>
                      <TableCell align="left" width={60}>Резерв</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="left">{row.calories}</TableCell>
                          <TableCell align="left">{row.fat}</TableCell>
                          <TableCell align="left">{row.carbs}</TableCell>
                          <TableCell align="left">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                <div className={classes.cryptoInputBox}>
                  <FormControl sx={{mr:0.1, minWidth: '67%' }} className={classes.currencyInput}>
                    <TextField  label="Отдаете"/>
                  </FormControl>
                  <FormControl sx={{ml:0.1, minWidth: '32%' }} className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                    <Select value={''} autoWidth label="Age">
                      <MenuItem value="">Валюта</MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.cryptoOutputBox}>
                  <FormControl sx={{mr:0.1, minWidth: '67%'}} className={classes.currencyInput}>
                    <TextField  label="Пoлучаете"/>
                  </FormControl>
                  <FormControl sx={{ml:0.1, minWidth: '32%'}} className={classes.currencyType}>
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
