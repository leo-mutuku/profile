import { Grid } from "@mui/material";
import { useState, lazy } from "react";
import CustomSuspense from "./components/CustomSuspense";

// Lazy load the HomePage component
const AppBarComponent = lazy(() => import("./components/appbar"));
const HomePage = lazy(() => import("./pages/homepage"));

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const handleThemeChange = (value: "dark" | "light") => {
    setTheme(value === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Grid>
        <CustomSuspense>
          <AppBarComponent
            themeValue={theme}
            handleThemeChange={handleThemeChange}
          />
        </CustomSuspense>
        {/* Wrap the lazy-loaded component in Suspense */}
        <CustomSuspense>
          <HomePage />
        </CustomSuspense>
      </Grid>
    </>
  );
}

export default App;
