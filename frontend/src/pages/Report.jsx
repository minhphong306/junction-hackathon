import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { Snackbar } from "@mui/material";
import DataReportedTable from "../components/DataReportedTable";

function Report() {
  const [inputSearch, setInputSearch] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if input is empty
    if (!inputSearch.trim()) {
      alert("Please enter a valid link!");
      return;
    }
    console.log("Form submitted with link:", inputSearch);
    setShowTable(true);
    setOpenSnackbar(true); // open the snackbar notification after submitting the form
  };

  const handleInputSearch = (event) => {
    setInputSearch(event.target.value);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <MainLayout>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: 5,
          margin: 5,
          //   width: "80%",
          //   textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          pb={5}
          width="100%"
          m="0 auto"
          color="#2F2D4A"
        >
          URL Report
        </Typography>
        <form onSubmit={handleSubmit} style={{ padding: 10 }}>
          <Box
            sx={{
              display: "flex",
              columnGap: 1,
              borderRadius: "10px",
              p: 2,
              mx: "8rem",
              my: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <TextField
              fullWidth
              size="small"
              onChange={handleInputSearch}
              placeholder="Paste here URL you want to check"
              sx={(theme) => ({
                "& fieldset": {
                  border: "none",
                },
                "& input": {
                  color: theme.palette.text.secondary,
                },
              })}
              InputProps={{
                endAdornment: (
                  <Button
                    type="submit"
                    sx={{
                      textTransform: "none",
                      borderRadius: "8px",
                      boxShadow: "none",
                      fontWeight: 400,
                      backgroundColor: "#FF3253 ",
                      color: "white",
                      padding: "12px 24px",
                    }}
                    variant="contained"
                  >
                    <FlagOutlinedIcon style={{ marginRight: "8px" }} />
                    Report
                  </Button>
                ),
              }}
            />
          </Box>
        </form>
        {/* Snackbar notification */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success">Report link successfully!</Alert>
        </Snackbar>
      </Box>
      {showTable && (
        <Box
          sx={{
            py: 1,
          }}
        >
          <Typography variant="h5" px={5}>
            Reported data:
          </Typography>
          <DataReportedTable />
        </Box>
      )}
    </MainLayout>
  );
}

export default Report;
