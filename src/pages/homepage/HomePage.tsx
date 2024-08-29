import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import StepperComponent from "../../components/steppercomponent";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

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
            background: themeValue === "dark" ? "black" : "white",
            padding: "15px 30px",
          }}
        >
          <Grid
            item
            sx={{
              flex: { xs: "1 0 15rem", md: "1 0 45rem" },
              height: { xs: "25rem", md: "50rem" },
              background: "red",
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
                  marginLeft: { xs: "27%", md: " 15%%" },
                  width: { xs: "10rem", md: "20rem" }, // Fixed width
                  height: { xs: "10rem", md: "20rem" }, // Fixed height
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
                <Typography variant="h3">Siddharth Kumar</Typography>
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
                  <FaGithub size={25} />
                </span>{" "}
                &nbsp; &nbsp;
                <span>
                  <CiLinkedin size={25} />
                </span>{" "}
                &nbsp; &nbsp;
                <FaXTwitter size={25} />
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              flex: { xs: "1 0 15rem", md: "1 0 15rem" },
              height: { xs: "5rem", md: "5rem" },
              background: "transparent",
              display: "flex", // Enable flexbox
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <Stack sx={{ marginTop: "50%" }}>
              <Typography>Skills</Typography>
              <StepperComponent />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
