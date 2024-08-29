import { Box, Modal, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

type HomePageProps = {
  themeValue: string;
};

const ProjectsPage = ({ themeValue }: HomePageProps) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageClick = (url: string) => {
    setImageUrl(url);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
    setImageUrl("");
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
              padding: 0, // Ensure no padding
              margin: 0, // Ensure no margin
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                padding: 0, // Ensure no padding
                margin: 0, // Ensure no margin
              }}
            >
              <Box
                sx={{
                  width: "100%", // Make the Box cover the entire Stack
                  height: "100%", // Make the Box cover the entire Stack
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0, // Ensure no padding
                  margin: 0, // Ensure no margin
                }}
              >
                <img
                  src="./amini-ai-profileimg.png"
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensure the image fully covers the Box
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick("./amini-ai-profileimg.png")}
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
              padding: 0, // Ensure no padding
              margin: 0, // Ensure no margin
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                padding: 0, // Ensure no padding
                margin: 0, // Ensure no margin
              }}
            >
              <Box
                sx={{
                  width: "100%", // Make the Box cover the entire Stack
                  height: "100%", // Make the Box cover the entire Stack
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0, // Ensure no padding
                  margin: 0, // Ensure no margin
                }}
              >
                <img
                  src="./bluetrax-profile-img.png"
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensure the image fully covers the Box
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick("./bluetrax-profile-img.png")}
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
                  src="./novena.PNG"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer", // Pointer cursor to indicate it's clickable
                  }}
                  onClick={() => handleImageClick("./novena.PNG")}
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
                  onClick={() =>
                    handleImageClick("./scriptfund-profileimg.png")
                  }
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
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly darker overlay for better contrast
            }}
          >
            <Box
              sx={{
                maxWidth: "90vw", // Limit max width to 90% of viewport width
                maxHeight: "90vh", // Limit max height to 90% of viewport height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: 24, // Shadow effect
                overflow: "hidden", // Prevent overflow
              }}
            >
              <img
                src={imageUrl}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain", // Maintain aspect ratio
                  width: "auto", // Allow width to adjust automatically
                  height: "auto", // Allow height to adjust automatically
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
