import React from "react";
import MainLayout from "../layout/MainLayout";
import { Box, Typography } from "@mui/material";
import VerticalStepper from "../components/VerticalStepper";

function Home() {
  return (
    <MainLayout>
      <Box sx={{ backgroundColor: "#F9FAFB" }}>
        <Box ml={3}>
          <Typography variant="h4" fontWeight="bold" pt={3} color="#2F2D4A">
            Get started!
          </Typography>
          <Typography variant="body2" color="gray" pt={2}>
            You’re off to a great start. Let's get you using Safeclick rightway.
          </Typography>
        </Box>

        <VerticalStepper />
      </Box>
    </MainLayout>
  );
}

export default Home;
