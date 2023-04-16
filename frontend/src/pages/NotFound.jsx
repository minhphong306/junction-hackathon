import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import NotFoundImg from "../assets/404.png";

function NotFoundImage() {
  return <img src={NotFoundImg} width="100%" alt="Not Found Image" />;
}

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box p={12}>
      <Box display="flex" gap={2}>
        <Box>
          <NotFoundImage />
        </Box>
        <Box>
          <Typography variant="h1" fontWeight="bold" p={2}>
            404 NOT FOUND
          </Typography>
          <Typography variant="h4" p={2} pr={8}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </Typography>
          <Button
            variant="outlined"
            style={{
              marginLeft: "16px",
              border: "2px solid black",
              color: "black",
              fontWeight: "bold",
              marginTop: 2,
            }}
            onClick={() => navigate("/")}
          >
            Back to Homepage
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NotFound;
