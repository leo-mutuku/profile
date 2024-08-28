import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

import ToggleButtonNotEmpty from "../togglebutton";
type AppBarComponentProps = {
  themeValue: string;
  handleThemeChange: (value: "dark" | "light") => void;
};

const AppBarComponent = ({
  themeValue,
  handleThemeChange,
}: AppBarComponentProps) => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: themeValue === "dark" ? "black" : "white",
        padding: "3px 3px",
      }}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: themeValue == "light" ? "black" : "white" }}
        >
          Leo Profile
        </Typography>
        <Stack></Stack>

        <Stack>
          <Button>
            <ToggleButtonNotEmpty
              themeValue={themeValue}
              handleThemeChange={handleThemeChange}
            />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
