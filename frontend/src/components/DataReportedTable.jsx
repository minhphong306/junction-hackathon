import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

function DataReportedTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const navigate = useNavigate();

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .post("/junctionx-be/search-url.php", { query: "a" })
  //     .then((response) => {
  //       setData(response.data);
  //       setLoading(false);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

  let data = [
    {
      id: "78",
      url: "https://easycredit-evn.com",
    },
    {
      id: "79",
      url: "https://h5.vndvay.com",
    },
    {
      id: "80",
      url: "https://dienmaycholon.me",
    },
    {
      id: "83",
      url: "https://hdsaison.asia",
    },
    {
      id: "90",
      url: "https://kkra8.com",
    },
    {
      id: "92",
      url: "https://www.vayvonshinhan.com",
    },
    {
      id: "93",
      url: "https://hi88.fan",
    },
    {
      id: "94",
      url: "https://kkrak.com",
    },
    {
      id: "96",
      url: "https://www.vayvonshinhan.com",
    },
    {
      id: "97",
      url: "https://kkra8.com",
    },
    {
      id: "98",
      url: "https://kkrak.com",
    },
    {
      id: "100",
      url: "https://minhchinhmega.com",
    },
    {
      id: "101",
      url: "https://mcredit.vaynhanh-bankcredits.com",
    },
    {
      id: "104",
      url: "https://www.vn-adzooma.com",
    },
    {
      id: "106",
      url: "https://amazonxk.com",
    },
    {
      id: "107",
      url: "https://vaymbbank.com",
    },
    {
      id: "108",
      url: "https://www.hackgamemienphi.com",
    },
    {
      id: "110",
      url: "https://www.shopeemallvn.com",
    },
    {
      id: "111",
      url: "https://congtykiman.org",
    },
    {
      id: "112",
      url: "https://alibabavn.shop",
    },
    {
      id: "114",
      url: "https://phattai6666.com",
    },
    {
      id: "115",
      url: "https://binhchonthisinhmayman20223.weebly.com",
    },
    {
      id: "116",
      url: "https://lo.dama582.com",
    },
    {
      id: "117",
      url: "https://vie-tcapital.com",
    },
    {
      id: "118",
      url: "https://www.vinfast888.net",
    },
    {
      id: "119",
      url: "https://cowtradingvip.com",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const sortedData = data.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  ); // Sort the data array by date

  const tableStyles = {
    borderCollapse: "separate",
    borderSpacing: 0,
    width: "100%",
    marginTop: "20px",
  };

  const headStyles = {
    backgroundColor: "#f5f5f5",
    position: "sticky",
    top: 0,
    fontWeight: "bold",
  };

  const cellStyles = {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    padding: 16,
    textAlign: "left",
  };

  const linkCellStyle = { ...cellStyles, width: "50%" };
  const createdDateCellStyle = { ...cellStyles, width: "25%" };
  const statusCellStyle = { ...cellStyles, width: "15%", marginLeft: "20px" };
  const actionCellStyle = { ...cellStyles, width: "10%" };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow); // Use the sorted data array in place of the original data array

  // if (loading) {
  //   return (
  //     <Box sx={{ display: "flex", justifyContent: "center" }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }
  return (
    <Box m={5}>
      <MuiTable style={tableStyles}>
        <TableHead style={headStyles}>
          <TableRow>
            <TableCell style={linkCellStyle}>Link</TableCell>
            <TableCell style={createdDateCellStyle}>Created Date</TableCell>
            <TableCell style={statusCellStyle}>Status</TableCell>
            <TableCell style={actionCellStyle}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {currentRows.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => navigate("/results")}
              style={{ cursor: "pointer" }}
            >
              <TableCell style={cellStyles}>{item.url}</TableCell>
              <TableCell style={cellStyles}>15/04/2023</TableCell>
              <TableCell style={cellStyles}>
                <Box
                  display="flex"
                  gap={1}
                  justifyContent="start"
                  alignItems="center"
                  sx={{
                    borderRadius: "15px ",
                    p: 1,
                    textAlign: "center",
                    width: "40%",
                    backgroundColor: "#E3F2FD",
                    color: "#2196F3",
                  }}
                >
                  <Box width="100%">Safe</Box>
                </Box>
              </TableCell>
              <TableCell style={cellStyles}>
                <RemoveRedEyeOutlinedIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>

      <Pagination
        count={Math.ceil(sortedData.length / rowsPerPage)} // Use the length of the sorted data array for the pagination count
        page={currentPage}
        onChange={handleChangePage}
        sx={{
          mt: 3,
        }}
      />
    </Box>
  );
}

export default DataReportedTable;
