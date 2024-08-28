import { Grid } from "@mui/material";
import { useState } from "react";
import AppBarComponent from "./components/appbar";
import { HomePage } from "./pages/homepage";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const handleThemeChange = (value: "dark" | "light") => {
    setTheme(value === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Grid>
        <AppBarComponent
          themeValue={theme}
          handleThemeChange={handleThemeChange}
        />
        <HomePage />
      </Grid>
    </>
  );
}

export default App;
