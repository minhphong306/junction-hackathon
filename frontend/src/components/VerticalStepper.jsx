import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Step1, Step2, Step3 } from "../assets/Steps";

function VerticalStepper() {
  return (
    <Box mx={14}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          p: 8,
          m: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box mr={3} width="100%">
          <Typography variant="caption">Step 1</Typography>
          <Typography style={{ fontWeight: "bold" }}>
            Install Extension
          </Typography>
          <Typography variant="body2" mt={2}>
            Activate real-time protection on our website by installing our
            extension. Click on the "Install Extension" button, follow the
            installation prompts, and you're all set!
          </Typography>
          <Box display="flex" my={2}>
            <Button
              variant="contained"
              p={2}
              style={{
                backgroundColor: "#0554F2",
                textTransform: "none",
                marginRight: "16px",
              }}
            >
              Install Extension
            </Button>
            <Button
              variant="outlined"
              style={{
                textTransform: "none",
                marginRight: "16px",
              }}
            >
              Watch video
            </Button>
          </Box>
        </Box>
        <Box>
          <Step1 />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          p: 8,
          m: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box mr={3} width="100%">
          <Typography variant="caption">Step 2</Typography>
          <Typography style={{ fontWeight: "bold" }}>Settings</Typography>
          <Typography variant="body2" mt={2}>
            Our extension is customizable to fit your needs. You can customize
            your real-time protection preferences and use the extension in your
            own way.
          </Typography>
          <Box display="flex" my={2}>
            <Button
              variant="contained"
              p={2}
              style={{
                backgroundColor: "#0554F2",
                textTransform: "none",
                marginRight: "16px",
              }}
            >
              Go to Settings
            </Button>
          </Box>
        </Box>
        <Box>
          <Step2 />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          p: 8,
          m: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box mr={3} width="100%">
          <Typography variant="caption">Step 3</Typography>
          <Typography style={{ fontWeight: "bold" }}>Explore Tools</Typography>
          <Typography variant="body2" mt={2}>
            Here are some tools that you can explore to enhance your security:
          </Typography>
          <Typography variant="body2" mt={2}>
            - Domain Phishing checker
          </Typography>
          <Typography variant="body2">
            - Scan Spam/Phishing Group/Fanpage Facebook
          </Typography>
          <Typography variant="body2">- Analytics</Typography>
          <Typography variant="body2">
            - Chat with chatGPT about Security
          </Typography>
        </Box>
        <Box>
          <Step3 />
        </Box>
      </Box>
    </Box>
  );
}

export default VerticalStepper;
