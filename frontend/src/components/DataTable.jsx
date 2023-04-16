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

function DataTable() {
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
    {
      id: "120",
      url: "https://muahangcargo.com",
    },
    {
      id: "121",
      url: "https://thantai.app",
    },
    {
      id: "123",
      url: "https://dienmaycholon.store",
    },
    {
      id: "124",
      url: "https://5giay.cc",
    },
    {
      id: "125",
      url: "https://cowtradingvip.com",
    },
    {
      id: "126",
      url: "https://www.ja-ccs.com",
    },
    {
      id: "128",
      url: "https://789.fgabb.net",
    },
    {
      id: "129",
      url: "https://congtythoitrangquocte.com",
    },
    {
      id: "131",
      url: "https://play.go88g.com",
    },
    {
      id: "132",
      url: "https://zulus.trade",
    },
    {
      id: "133",
      url: "https://test1.apacvirtual.top",
    },
    {
      id: "134",
      url: "https://traotin2023.com",
    },
    {
      id: "135",
      url: "https://ducnghia1.net",
    },
    {
      id: "136",
      url: "https://tradeftmbitcoin.com",
    },
    {
      id: "140",
      url: "https://wealth-managament.com.vn",
    },
    {
      id: "142",
      url: "https://tongdaicaptruyenhinh.online",
    },
    {
      id: "143",
      url: "https://ducnghia1.net",
    },
    {
      id: "144",
      url: "https://traotin2023.com",
    },
    {
      id: "145",
      url: "https://zulus.trade",
    },
    {
      id: "146",
      url: "https://www.easycredit-easy.com",
    },
    {
      id: "148",
      url: "https://atmonline.site",
    },
    {
      id: "149",
      url: "https://audiindex.com",
    },
    {
      id: "150",
      url: "https://www.whshippingao.com",
    },
    {
      id: "154",
      url: "https://namu2018.com",
    },
    {
      id: "155",
      url: "https://tochucthiennguyentreemsaigon.com",
    },
    {
      id: "157",
      url: "https://tpbank-com.com",
    },
    {
      id: "160",
      url: "https://vinfast88.com",
    },
    {
      id: "161",
      url: "https://app.tnmxnckvn.com",
    },
    {
      id: "162",
      url: "https://easycredit-evn.com",
    },
    {
      id: "163",
      url: "https://webapp.tubevay.com",
    },
    {
      id: "164",
      url: "https://h5vaytien.com",
    },
    {
      id: "166",
      url: "https://digitalmarketing2017.com",
    },
    {
      id: "167",
      url: "https://app.tnmxnckvn.com",
    },
    {
      id: "168",
      url: "https://hoanmmy.net",
    },
    {
      id: "169",
      url: "https://traoviet2023.com",
    },
    {
      id: "171",
      url: "https://sieuthidienmayxanh247.com",
    },
    {
      id: "172",
      url: "https://vayqualuongshinhan.com",
    },
    {
      id: "175",
      url: "https://jaccscom.com",
    },
    {
      id: "177",
      url: "https://www.tpbankn.com",
    },
    {
      id: "178",
      url: "https://midland68.com",
    },
    {
      id: "182",
      url: "https://midland68.com",
    },
    {
      id: "183",
      url: "https://www.tpbankn.com",
    },
    {
      id: "184",
      url: "https://68gamebai.io",
    },
    {
      id: "185",
      url: "https://www.tpbankc.com",
    },
    {
      id: "189",
      url: "https://bay789.vin",
    },
    {
      id: "191",
      url: "https://trangsucluxurydiamond.com",
    },
    {
      id: "196",
      url: "https://hi88.team",
    },
    {
      id: "202",
      url: "https://www.megaqji.com",
    },
    {
      id: "204",
      url: "https://www.traphaco1.pro",
    },
    {
      id: "207",
      url: "https://hdbankfinance.live",
    },
    {
      id: "208",
      url: "https://anbinh-finance.club",
    },
    {
      id: "209",
      url: "https://mega6669.com",
    },
    {
      id: "210",
      url: "https://softwarefpt.com",
    },
    {
      id: "214",
      url: "https://mega6669.com",
    },
    {
      id: "215",
      url: "https://shopfamilyssg.com",
    },
    {
      id: "216",
      url: "https://anbinh-finance.club",
    },
    {
      id: "217",
      url: "https://hdbankfinance.live",
    },
    {
      id: "218",
      url: "https://www.traphaco1.pro",
    },
    {
      id: "219",
      url: "https://rwca33.com",
    },
    {
      id: "220",
      url: "https://www.caesarslb.live",
    },
    {
      id: "227",
      url: "https://www.caesarslb.live",
    },
    {
      id: "228",
      url: "https://vn.btaynguyenfood.com",
    },
    {
      id: "230",
      url: "https://vaymb.org",
    },
    {
      id: "232",
      url: "https://sona-media.com",
    },
    {
      id: "235",
      url: "https://play.go88h.com",
    },
    {
      id: "240",
      url: "https://www.megaj0s.com",
    },
    {
      id: "241",
      url: "https://play.go88h.com",
    },
    {
      id: "246",
      url: "https://sin88.space",
    },
    {
      id: "248",
      url: "https://fashionworld2023.com",
    },
    {
      id: "250",
      url: "https://a666.vn",
    },
    {
      id: "256",
      url: "https://dtncommunications2010.com",
    },
    {
      id: "257",
      url: "https://chanlemmo.com",
    },
    {
      id: "266",
      url: "https://lotteapp.fun",
    },
    {
      id: "267",
      url: "https://momohanoi.me",
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

export default DataTable;
