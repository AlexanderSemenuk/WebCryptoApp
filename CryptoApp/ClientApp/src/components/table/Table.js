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

export default function CustomizedTables({ data }) {
  const formatNumber = (number) => {
    // Округляем число до двух знаков после запятой
    const roundedNumber = parseFloat(number).toFixed(2);

    // Разделяем число на целую и десятичную части
    let [integerPart, decimalPart] = roundedNumber.split(".");

    // Добавляем разделитель для тысяч в целой части
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Собираем отформатированное число
    const formattedNumber = decimalPart
      ? `${integerPart}.${decimalPart}`
      : integerPart;

    // Определяем суффиксы для тысяч, миллионов, миллиардов и т.д.
    const suffixes = ["", "K", "M", "B", "T"];

    let suffixIndex = 0;
    let formattedNumberWithSuffix = parseFloat(number);

    while (
      formattedNumberWithSuffix >= 1000 &&
      suffixIndex < suffixes.length - 1
    ) {
      formattedNumberWithSuffix /= 1000;
      suffixIndex++;
    }

    // Округляем число до двух знаков после запятой
    formattedNumberWithSuffix = parseFloat(
      formattedNumberWithSuffix.toFixed(2)
    );

    // Добавляем суффикс
    const numberWithSuffix =
      formattedNumberWithSuffix.toString() + suffixes[suffixIndex];

    return { formattedNumber, numberWithSuffix };
  };

  return (
    <div className="Table">
      <div className="Table__prices">Crypto prices</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Chart</StyledTableCell>
              <StyledTableCell align="right">Change</StyledTableCell>
              <StyledTableCell align="right">Market Cap</StyledTableCell>
              <StyledTableCell align="right">Volume (24h)</StyledTableCell>
              <StyledTableCell align="right">Supply</StyledTableCell>
              <StyledTableCell align="right">Trade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  ${formatNumber(item.priceUsd).formattedNumber}
                </StyledTableCell>
                <StyledTableCell align="right">{item.Chart}</StyledTableCell>
                <StyledTableCell align="right">{item.Change}</StyledTableCell>
                <StyledTableCell align="right">
                  ${formatNumber(item.marketCapUsd).numberWithSuffix}
                </StyledTableCell>
                <StyledTableCell align="right">
                  ${formatNumber(item.volumeUsd24Hr).numberWithSuffix}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {formatNumber(item.supply).numberWithSuffix}
                </StyledTableCell>
                <StyledTableCell align="right">{item.Trade} </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
