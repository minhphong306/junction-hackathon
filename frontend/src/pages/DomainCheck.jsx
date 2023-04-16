import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import DataTable from "../components/DataTable";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function DomainCheck() {
  const [showTable, setShowTable] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [previousSearch, setPreviousSearch] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if input is empty
    if (!inputSearch.trim()) {
      setShowTable(false);
      return;
    }
    console.log("Form submitted with value:", inputSearch);
    setShowTable(true);
    setPreviousSearch(inputSearch);
  };

  const handleInputSearch = (event) => {
    setInputSearch(event.target.value);
  };
  return (
    <MainLayout>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: 5,
          m: 6,
          // marginTop: 5,
          // width: "80%",
          // margin: "4 auto",
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
          URL Check
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
              placeholder="Paste here URL/keyword you want to check"
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
                      backgroundColor: "#0554F2",
                      color: "white",
                      padding: "12px 24px",
                    }}
                    variant="contained"
                  >
                    <SearchIcon style={{ marginRight: "8px" }} />
                    Check
                  </Button>
                ),
              }}
            />
          </Box>
          {showTable && (
            <Typography variant="h5" mt={5} ml={5}>
              Results for input search: {previousSearch}
            </Typography>
          )}
        </form>

        {showTable && (
          <Box
            sx={{
              py: 1,
            }}
          >
            <DataTable />
          </Box>
        )}
      </Box>
    </MainLayout>
  );
}

export default DomainCheck;
