import { Box, Divider, Grid, Typography } from "@mui/material";
import { useState, lazy } from "react";
import CustomSuspense from "./components/CustomSuspense";

// Lazy load the HomePage component
const AppBarComponent = lazy(() => import("./components/appbar"));
const HomePage = lazy(() => import("./pages/homepage"));

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Grid
        sx={{
          height: "auto",
        }}
      >
        <CustomSuspense>
          <AppBarComponent
            themeValue={theme}
            handleThemeChange={handleThemeChange}
          />
        </CustomSuspense>
        <Divider />
        {/* Wrap the lazy-loaded component in Suspense */}

        <CustomSuspense>
          <HomePage themeValue={theme} />
        </CustomSuspense>
        <CustomSuspense>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "30vh",
              backgroundColor: "white",
              padding: "50px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "black",
                textAlign: "center",
                maxWidth: "800px",
                lineHeight: 1.75,
                fontFamily: "'Roboto', sans-serif",
                fontSize: { xs: "1rem", md: "1.25rem" }, // Adjust font size for mobile and larger screens
                letterSpacing: "0.5px",
              }}
            >
              I am a highly skilled Frontend Developer with over 6 years of
              experience in creating responsive, user-friendly web applications.
              My expertise lies in leveraging modern frontend technologies such
              as Angular, React, VueJS, TypeScript, and UI Libraries to build
              high-performance, scalable solutions. I have a strong background
              in developing intuitive user interfaces and optimizing user
              experiences, coupled with a keen eye for design and detail.
            </Typography>
          </Box>
        </CustomSuspense>
      </Grid>
    </>
  );
}

export default App;
