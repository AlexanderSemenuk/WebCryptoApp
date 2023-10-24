import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Table.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.green,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Bitcoin"),
  createData("Ethereum"),
  createData("Tether"),
  createData("BNB"),
  createData("XRP"),
];

export default function CustomizedTables() {
  return (
    <div className="Table">
      <div className="Table__prices">Crypto prices</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Chart&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Change&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Market Cap&nbsp;</StyledTableCell>
              <StyledTableCell align="right">
                Volume (24h)&nbsp;
              </StyledTableCell>
              <StyledTableCell align="right">Supply&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Trade&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.Chart}</StyledTableCell>
                <StyledTableCell align="right">{row.Change}</StyledTableCell>
                <StyledTableCell align="right">{row.MarketCap}</StyledTableCell>
                <StyledTableCell align="right">{row.Volume}</StyledTableCell>
                <StyledTableCell align="right">{row.Supply}</StyledTableCell>
                <StyledTableCell align="right">{row.Trade} </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
