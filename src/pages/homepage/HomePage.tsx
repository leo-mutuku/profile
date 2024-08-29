import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
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
    ctx.fillStyle = "#4caf50"; // Text color
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

const HomePage = ({ themeValue }: HomePageProps) => {
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
              flex: { xs: "1 0 15rem", md: "1 0 45rem" },
              height: { xs: "15rem", md: "30rem" },
              background: "transparenet",
              display: "flex", // Enable flexbox
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <Stack>
              <Box
                component="img"
                src="/profile.webp" // Path to your image in the public folder
                alt="Description of image"
                sx={{
                  borderRadius: "50%", // Makes the image circular
                  marginLeft: { xs: "18%", md: " 10%" },
                  width: { xs: "6rem", md: "12rem" }, // Fixed width
                  height: { xs: "6rem", md: "12rem" }, // Fixed height
                  objectFit: "cover", // Ensures the image covers the area while maintaining aspect ratio
                }}
              />
              <br />
              <Box
                style={{
                  color: "white",
                  position: "relative",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5">
                  Frontend Software Developer
                </Typography>
              </Box>
              <br></br>

              <Box
                style={{
                  color: "white",
                  position: "relative",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <span>
                  <FaGithub size={20} />
                </span>{" "}
                &nbsp; &nbsp;
                <span>
                  <CiLinkedin size={20} />
                </span>{" "}
                &nbsp; &nbsp;
                <FaXTwitter size={20} />
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              flex: { xs: "1 0 15rem", md: "1 0 45rem" },
              height: { xs: "15rem", md: "30rem" },
              background: "transparenet",
              display: "flex", // Enable flexbox
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <Stack>
              {" "}
              <Box
                sx={{
                  width: { xs: "10rem", md: "20rem" },
                  height: { xs: "7.5rem", md: "15rem" },
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
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
