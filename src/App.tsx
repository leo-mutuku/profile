import { Divider, Grid } from "@mui/material";
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
      </Grid>
    </>
  );
}

export default App;
