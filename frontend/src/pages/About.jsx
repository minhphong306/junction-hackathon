import { Box, Typography } from "@mui/material";
import React from "react";
import { Avt1, Avt2, Avt3, Avt4, Avt5 } from "../assets/Avatars";
import MainLayout from "../layout/MainLayout";

function About() {
  return (
    <MainLayout>
      <Box pt={5} px={3} pb={20}>
        <Typography textAlign="center" variant="h3" fontWeight="bold" pb={1}>
          Our Team
        </Typography>
        <Typography textAlign="center" variant="h5" pb={5} color="gray">
          Meet out amazing team members
        </Typography>
        <Box display="flex" gap={2} justifyContent="space-between">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "18px",
              textAlign: "center",
              p: 5,
              width: "20%",
              boxShadow: "0px 40px 33px -12px rgba(0,0,0,0.1)",
            }}
          >
            <Avt1 />
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              mt={2}
            >
              Vu Cuong
            </Typography>
            <Typography
              variant="caption"
              color="gray"
              fontWeight="bold"
              textAlign="center"
              mt={1}
            >
              Project Manager
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "18px",
              textAlign: "center",
              p: 5,
              width: "20%",
              boxShadow: "0px 40px 33px -12px rgba(0,0,0,0.1)",
            }}
          >
            <Avt2 />
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              mt={2}
            >
              Minh Phong
            </Typography>
            <Typography
              variant="caption"
              color="gray"
              fontWeight="bold"
              textAlign="center"
              mt={1}
            >
              Developer
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "18px",
              textAlign: "center",
              p: 5,
              width: "20%",
              boxShadow: "0px 40px 33px -12px rgba(0,0,0,0.1)",
            }}
          >
            <Avt3 />
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              mt={2}
            >
              Khac Hung
            </Typography>
            <Typography
              variant="caption"
              color="gray"
              fontWeight="bold"
              textAlign="center"
              mt={1}
            >
              Developer
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "18px",
              textAlign: "center",
              p: 5,
              width: "20%",
              boxShadow: "0px 40px 33px -12px rgba(0,0,0,0.1)",
            }}
          >
            <Avt4 />
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              mt={2}
            >
              Pham Chinh
            </Typography>
            <Typography
              variant="caption"
              color="gray"
              fontWeight="bold"
              textAlign="center"
              mt={1}
            >
              Developer
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "18px",
              textAlign: "center",
              p: 5,
              width: "20%",
              boxShadow: "0px 40px 33px -12px rgba(0,0,0,0.1)",
            }}
          >
            <Avt5 />
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              mt={2}
            >
              Minh Vu
            </Typography>
            <Typography
              variant="caption"
              color="gray"
              fontWeight="bold"
              textAlign="center"
              mt={1}
            >
              Developer
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default About;
