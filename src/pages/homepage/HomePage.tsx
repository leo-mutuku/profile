import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import StepperComponent from "../../components/steppercomponent";

type HomePageProps = {
  themeValue: string;
};
const HomePage = ({ themeValue }: HomePageProps) => {
  return (
    <>
      <Grid
        container
        gap={3}
        sx={{
          background: themeValue === "dark" ? "black" : "white",
          padding: "15px 30px",
          minHeight: "100vh",
        }}
      >
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
          <Box
            component="img"
            src="/profile.webp" // Path to your image in the public folder
            alt="Description of image"
            sx={{
              marginTop: "60%",
              borderRadius: "50%", // Makes the image circular
              width: "200px", // Fixed width
              height: "200px", // Fixed height
              objectFit: "cover", // Ensures the image covers the area while maintaining aspect ratio
            }}
          />
          <Box sx={{}} />
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
          <Box sx={{ marginTop: "60%" }}>
            <Typography>Skills</Typography>
            <StepperComponent />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        gap={3}
        sx={{
          background: themeValue === "dark" ? "black" : "white",
          padding: "15px 30px",
          minHeight: "100vh",
        }}
      >
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
          <Box
            component="img"
            src="/profile.webp" // Path to your image in the public folder
            alt="Description of image"
            sx={{
              marginTop: "60%",
              borderRadius: "50%", // Makes the image circular
              width: "200px", // Fixed width
              height: "200px", // Fixed height
              objectFit: "cover", // Ensures the image covers the area while maintaining aspect ratio
            }}
          />
          <Box sx={{}} />
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
          <Box sx={{ marginTop: "60%" }}>
            <Typography>Skills</Typography>
            <StepperComponent />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
