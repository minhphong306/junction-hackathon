import React from "react";
import MainLayout from "../layout/MainLayout";
import Form from "../components/Form";
import Review from "../components/Review";
import { Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";

import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CircleScoreMark({ score }) {
  let color = "red";
  if (score >= 80) {
    color = "green";
  } else if (score >= 60) {
    color = "orange";
  }

  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        size={100}
        thickness={5}
        value={score}
        style={{ color: color }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {score}
      </div>
    </div>
  );
}

function Results() {
  return (
    <MainLayout>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: 5,
          margin: 5,
        }}
      >
        <Form />
      </Box>
      <Typography variant="h5" fontWeight="bold" pl={5} mb={2}>
        Check Results
      </Typography>

      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          p: 5,
          mx: 5,
        }}
      >
        {/* Phishing warning */}
        <Box>
          <Box sx={{ display: "flex", justifyContent: "start", px: 5 }}>
            <WarningIcon style={{ color: "red" }} />
            <Typography ml={1} variant="body1" color="red">
              Website is on phishing website pool!
            </Typography>
          </Box>
          <Typography variant="body1" px={5}>
            It appears that this website is on a phishing website pool. Please
            do not provide any personal information or login credentials on this
            website. It's recommended to exit the website immediately and report
            it to the appropriate authorities. Stay safe online!
          </Typography>
        </Box>

        {/* Good warning */}
        <Box>
          <Box sx={{ display: "flex", justifyContent: "start", px: 5 }}>
            <CheckCircleIcon style={{ color: "green" }} />
            <Typography ml={1} variant="body1" color="green">
              Website is safe for use!
            </Typography>
          </Box>
          <Typography variant="body1" px={5}>
            Good news! This website is safe to use. You can trust that any
            information you enter on this website will be kept confidential and
            secure. We have taken measures to ensure the authenticity and
            security of the website, including implementing SSL encryption and
            regularly monitoring for any suspicious activity.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          px: 5,
          m: 5,
        }}
      >
        <Box display="flex" justify="center" gap={2} p={5}>
          <Box width="30%">
            <CircleScoreMark score={85} />
          </Box>
          <Box>
            <Typography variant="body1" color="gray" mb={1}>
              Website Score for:
            </Typography>
            <Typography variant="body2" mb={1}>
              https://googlle.com
            </Typography>
            <Typography variant="h5" color="green" mb={1}>
              This website is safe for use!
            </Typography>
            <Typography variant="h5" color="red" mb={1}>
              This website is very likely a phishing website, please be careful!
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          p: 5,
          m: 5,
        }}
      >
        <Review />
      </Box>
    </MainLayout>
  );
}

export default Results;
