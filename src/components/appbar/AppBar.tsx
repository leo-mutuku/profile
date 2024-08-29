import { AppBar, Toolbar, Typography, Stack, Button, Box } from "@mui/material";

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
      position="relative"
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
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "'Courier New', monospace",
              fontSize: { xs: "20px", md: "38px" },
              color: themeValue === "light" ? "black" : "#ff4500",
              textAlign: "center",
              background: "linear-gradient(to right, #ffdf00, #ff4500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "4px 4px 0 rgba(0,0,0,0.1)",
              letterSpacing: "2px",
            }}
          >
            Leo Mutuku's Profile.
          </Typography>
        </Box>

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
