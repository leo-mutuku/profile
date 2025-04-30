import { Box, Divider, Grid, Typography } from "@mui/material";
import { useState, lazy } from "react";
import CustomSuspense from "./components/CustomSuspense";
import ProjectsPage from "./pages/projectspage";
import BasicCanvas from "./components/threejs";
import SkillList from "./pages/homepage/SkillsPage";
import Footer from "./pages/footerpage";

// Lazy load the HomePage component
const AppBarComponent = lazy(() => import("./components/appbar"));
const HomePage = lazy(() => import("./pages/homepage"));

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

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
              <strong>Full-Stack Developer & DevOps Specialist</strong>
              <>
                {" "}
                <BasicCanvas />
              </>
              
Results-driven Full-Stack Developer with 6+ years of experience building scalable web applications that deliver exceptional user experiences. Expertise spans the entire development lifecycle, from intuitive frontend interfaces to robust backend systems and DevOps infrastructure.
Technical Expertise <br></br>

Frontend: React, Angular, Vue.js, TypeScript, Modern UI Libraries<br></br>
Backend: Spring Boot, Node.js, C#/.<br></br>
Cloud & DevOps: AWS, CI/CD Pipeline Management, Infrastructure as Code<br></br>
SRE Practices: System Reliability, Performance Optimization, Monitoring<br></br>

Adept at bridging technical gaps between frontend and backend systems while implementing DevOps methodologies that enhance development velocity and system reliability. Consistently delivers elegant solutions that balance technical excellence with business objectives.
            </Typography>
          </Box>
        </CustomSuspense>
        {/* projects */}
        <CustomSuspense>
          <ProjectsPage themeValue={theme} />
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
              <strong>Skills & Tech Stack</strong>,
              <BasicCanvas />
              <SkillList />
            </Typography>
          </Box>
        </CustomSuspense>

        {/* Mentorsship */}

        <CustomSuspense>
          <Footer />
        </CustomSuspense>
      </Grid>
    </>
  );
}

export default App;
