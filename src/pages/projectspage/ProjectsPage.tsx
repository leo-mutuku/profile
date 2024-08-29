import { Box, Modal, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  ChartOptions,
  ChartData,
  Plugin,
} from "chart.js";

ChartJS.register(ArcElement);

const data: ChartData<"doughnut"> = {
  datasets: [
    {
      data: [100, 0], // 70% filled, 30% empty
      backgroundColor: ["#ff6100", "#e0e0e0"],
      borderWidth: 0,
      circumference: 360,
      rotation: 270,
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  cutout: "90%",
};

const centerTextPlugin: Plugin<"doughnut"> = {
  id: "centerTextPlugin",
  beforeDraw: function (chart) {
    const { ctx, width, height } = chart;
    ctx.save();
    const text = "6yrs XP"; // Text to display
    ctx.font = "bold 20px Arial"; // Font size and style
    ctx.fillStyle = "#fff"; // Text color
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const centerX = width / 2;
    const centerY = height / 2;
    ctx.fillText(text, centerX, centerY);
    ctx.restore();
  },
};

type HomePageProps = {
  themeValue: string;
};

const ProjectsPage = ({ themeValue }: HomePageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
  };
  return (
    <>
      <Box sx={{ background: "red" }}>
        <Grid
          container
          gap={3}
          sx={{
            background: themeValue === "dark" ? "black" : "#3c70d9",
            padding: "15px 30px",
          }}
        >
          <Grid
            item
            sx={{
              flex: { xs: "1 0 15rem", md: "1 0 25rem" },
              height: { xs: "15rem", md: "30rem" },
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%", // Ensure the chart takes up the full width
              }}
            >
              <Box
                sx={{
                  width: { xs: "10rem", md: "20rem" },
                  height: { xs: "7.5rem", md: "15rem" },
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                }}
              >
                <img src="./amini-ai-profileimg.png" />
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              flex: { xs: "1 0 15rem", md: "1 0 25rem" },
              height: { xs: "15rem", md: "30rem" },
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%", // Ensure the chart takes up the full width
              }}
            >
              <Box
                sx={{
                  width: { xs: "10rem", md: "20rem" },
                  height: { xs: "7.5rem", md: "15rem" },
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                }}
              >
                <Doughnut
                  data={data}
                  options={options}
                  plugins={[centerTextPlugin]}
                />
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              flex: { xs: "1 0 15rem", md: "1 0 25rem" },
              height: { xs: "15rem", md: "30rem" },
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%", // Ensure the chart takes up the full width
              }}
            >
              <Box
                sx={{
                  width: { xs: "10rem", md: "20rem" },
                  height: { xs: "7.5rem", md: "15rem" },
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                }}
              >
                <Doughnut
                  data={data}
                  options={options}
                  plugins={[centerTextPlugin]}
                />
              </Box>
            </Stack>
          </Grid>

          <Grid
            item
            sx={{
              flex: { xs: "1 0 15rem", md: "1 0 25rem" },
              height: { xs: "15rem", md: "30rem" },
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: { xs: "10rem", md: "20rem" },
                  height: { xs: "7.5rem", md: "15rem" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./scriptfund-profileimg.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer", // Pointer cursor to indicate it's clickable
                  }}
                  onClick={handleImageClick}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box>
          <Modal
            open={isZoomed}
            onClose={handleClose}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
            }}
          >
            <Box
              sx={{
                width: { xs: "80vw", md: "80vw" },
                height: { xs: "80vh", md: "80vh" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: 24, // Adds a shadow effect
                p: 2,
              }}
            >
              <img
                src="./scriptfund-profileimg.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Modal>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsPage;
