import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ScoreWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
}));

function Score({ score }) {
  return (
    <Box>
      <ScoreWrapper>
        <Typography variant="h4">{score}</Typography>
      </ScoreWrapper>
    </Box>
  );
}

export default Score;
