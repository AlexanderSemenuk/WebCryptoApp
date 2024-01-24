import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { formatPercentage, formatNumber } from "./../function/function.js";

import "./Table.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: "rgb(118, 118, 233)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
  "&.custom-hover": {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(93, 93, 224)",
      transition: "0.5s all",
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
      transition: "0.3s",
    },
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
    transition: "0.3s",
  },
}));

const CustomizedTables = ({ data }) => {
  const [displayCount, setDisplayCount] = useState(20);
  const [sortOrder, setSortOrder] = useState({
    field: null,
    ascending: true,
  });
  const [sortDirection, setSortDirection] = useState("asc");

  const navigate = useNavigate();

  const dataArray = Object.values(data);

  const loadMore = () => {
    setDisplayCount((prevDisplayCount) => prevDisplayCount + 10);
  };

  const handleSort = (field) => {
    setSortOrder((prevSortOrder) => ({
      field,
      ascending:
        prevSortOrder.field === field ? !prevSortOrder.ascending : true,
    }));

    setSortDirection((prevSortDirection) =>
      prevSortDirection === "asc" ? "desc" : "asc"
    );
  };

  const sortedData = [...dataArray].sort((a, b) => {
    const fieldA = a[sortOrder.field];
    const fieldB = b[sortOrder.field];

    if (sortOrder.ascending) {
      return fieldA - fieldB;
    } else {
      return fieldB - fieldA;
    }
  });
  const limitedData = Array.isArray(sortedData)
    ? sortedData.slice(0, displayCount)
    : [];

  return (
    <div className="Table">
      <div className="Table__choose">
        <h1 className="Table__choose__header">Crypto prices</h1>
        <button className="Table__choose__button">USD</button>
        <button className="Table__choose__button">1D</button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                onClick={() => handleSort("name")}
                className="custom-hover"
              >
                Name{" "}
                {sortOrder.field === "name" && (
                  <>
                    {sortDirection === "asc" ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowDropUpIcon />
                    )}
                  </>
                )}
              </StyledTableCell>
              <StyledTableCell
                onClick={() => handleSort("priceUsd")}
                align="right"
                className="custom-hover"
              >
                Price{" "}
                {sortOrder.field === "priceUsd" && (
                  <>
                    {sortDirection === "asc" ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowDropUpIcon />
                    )}
                  </>
                )}
              </StyledTableCell>
              <StyledTableCell align="right">Chart</StyledTableCell>
              <StyledTableCell
                onClick={() => handleSort("changePercent24Hr")}
                align="right"
                className="custom-hover"
              >
                Change{" "}
                {sortOrder.field === "changePercent24Hr" && (
                  <>
                    {sortDirection === "asc" ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowDropUpIcon />
                    )}
                  </>
                )}
              </StyledTableCell>
              <StyledTableCell
                onClick={() => handleSort("marketCapUsd")}
                align="right"
                className="custom-hover"
              >
                Market Cap{" "}
                {sortOrder.field === "marketCapUsd" && (
                  <>
                    {sortDirection === "asc" ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowDropUpIcon />
                    )}
                  </>
                )}
              </StyledTableCell>
              <StyledTableCell align="right">Volume (24h)</StyledTableCell>
              <StyledTableCell align="right">Supply</StyledTableCell>
              <StyledTableCell align="center">Trade</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {limitedData?.map((item) => (
              <StyledTableRow
                key={item.id}
                onClick={() => {
                  navigate(`/crypto/${item.id}`);
                }}
              >
                <StyledTableCell component="th" scope="row">
                  <div className="Table__name">
                    <img
                      src={item.imageUrl}
                      alt="thumbnail"
                      className="Table__thumbnail"
                      onError={(e) => {
                        e.target.src =
                          "https://cdn.discordapp.com/attachments/855187055940075530/1161619083045916692/logo.png?ex=65c36293&is=65b0ed93&hm=cb690e6ef95f1a36aace54556c6aa6cb97082a4875cb79d536c0003366fa256f&";
                      }}
                    />
                    <span>{item.name}</span>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">
                  ${formatNumber(item.priceUsd).formattedNumber}
                </StyledTableCell>
                <StyledTableCell align="right">{item.chart}</StyledTableCell>
                <StyledTableCell align="right">
                  <span
                    className={
                      item.changePercent24Hr < 0 ? "negative" : "positive"
                    }
                  >
                    {item.changePercent24Hr < 0 ? (
                      <SouthEastIcon />
                    ) : (
                      <NorthEastIcon />
                    )}
                    {formatPercentage(item.changePercent24Hr)}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">
                  $
                  {item.marketCapUsd > 0
                    ? `${formatNumber(item.marketCapUsd).numberWithSuffix}`
                    : "0"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  ${formatNumber(item.volumeUsd24Hr).numberWithSuffix}
                </StyledTableCell>
                <StyledTableCell align="right">
                  $
                  {item.supply > 0
                    ? `${formatNumber(item.supply).numberWithSuffix}`
                    : "0"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button className="Table__button">Trade</button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {dataArray.length > displayCount && (
        <button onClick={loadMore} className="Table__load">
          Load More
        </button>
      )}
    </div>
  );
};
export default CustomizedTables;
