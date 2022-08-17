import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

function createData(firstName, lastName, email) {
  return { firstName, lastName, email};
}

const rows = [
  createData('Charley', 'Alario','calari1@lsu.edu'),
  createData('Nicholas', 'Atkinson','Natkin4@lsu.edu'),
  createData('Paul', 'Bencivengo','Pbenci1@lsu.edu'),
  createData('Clayton', 'Blake','cblake6@lsu.edu'),
  createData('Nicholas', 'Bonura','Nbonur5@lsu.edu'),
  createData('Jimmy', 'Bourgeois','jbou164@lsu.edu'),
  createData('John', 'Breaud','jbreau2@lsu.edu'),
  createData('Jaden', 'Brock','Jbroc28@lsu.edu'),
  createData('David', 'Broussard','dbrou48@lsu.edu'),
  createData('Joshua', 'Bynum','jbynum5@lsu.edu'),
  createData('Michael', 'Capritto','Mcapri7@lsu.edu'),
  createData('Jack', 'Chastain','Jchast6@lsu.edu'),
  createData('Kane', 'Chisholm','Kchish4@lsu.edu'),
  createData('Sullivan', 'Crozier','Scrozi2@lsu.edu'),
  createData('Michael', 'Day','Mday21@lsu.edu'),
  createData('Kirk', 'Delacroix','Kdelac2@lsu.edu'),
  createData('Gabriel', 'Eberle','geberl1@lsu.edu'),
  createData('Chase', 'Eilers','ceiler1@lsu.edu'),
  createData('Justin', 'Green','jgre239@lsu.edu'),
  createData('Preston', 'Guedry','Pguedr3@lsu.edu'),
  createData('Justin', 'Guidry','Jgui148@lsu.edu'),
  createData('Jack', 'Hanks','jhanks9@lsu.edu'),
  createData('Jacob', 'Happel','jhappe1@lsu.edu'),
  createData('Ford', 'Hardwick','Chardw1@lsu.edu'),
  createData('Marshall', 'Harris','mhar188@lsu.edu'),
  createData('Owen', 'Henderson','Ohende1@lsu.edu'),
  createData('Andrew', 'Hermes','Aherme4@lsu.edu'),
  createData('Matt', 'Hill','Shill72@lsu.edu'),
  createData('Andrew', 'Hodgman','ahodgm2@lsu.edu'),
  createData('Grant', 'John','gjohn3@lsu.edu'),
  createData('Christopher', 'Johns','Cjoh465@lsu.edu'),
  createData('Daniel', 'Jones','djon198@lsu.edu'),
  createData('Sean', 'Kvilhaug','skvilh1@lsu.edu'),
  createData('Nicholas', 'Locascio','nlocas1@lsu.edu'),
  createData('Mason', 'McClatchey','Mmccl27@lsu.edu'),
  createData('Jon', 'Miller','jmil325@lsu.edu'),
  createData('Chase', 'Nevers','cnever1@lsu.edu'),
  createData('Nicholas', 'Raspino','nraspi1@lsu.edu'),
  createData('Dan', 'Reeves','dreev11@lsu.edu'),
  createData('Jacob', 'Reinhardt','Jreinh5@lsu.edu'),
  createData('Ross', 'Richard','rric112@lsu.edu'),
  createData('Miles', 'Rivault','Mrivau1@lsu.edu'),
  createData('Woods', 'Russo','wrusso4@lsu.edu'),
  createData('James', 'Santos','Jsant15@lsu.edu'),
  createData('Trevor', 'Seale','Tseale4@lsu.edu'),
  createData('Joe', 'Shapiro','Dshapi2@lsu.edu'),
  createData('Joseph', 'Sims','Jsims53@lsu.edu'),
  createData('Gregory', 'Sofield','Gsofie1@lsu.edu'),
  createData('Clark', 'Stephenson',''),

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ ml:{xs:0,sm:2,md:7}}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ }}
            >

              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}