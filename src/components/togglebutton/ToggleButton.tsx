import * as React from "react";

import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

type ToggleButtonGroupProps = {
  handleThemeChange: (value: string) => string;
  themeValue: string;
};
export default function ToggleButtonNotEmpty({
  handleThemeChange,
  themeValue,
}: ToggleButtonGroupProps) {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      handleThemeChange(newAlignment === "left" ? "dark" : "light"); // Trigger theme change
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned" size="small">
          <LightModeOutlinedIcon
            sx={{ color: themeValue === "dark" ? "white" : "black" }}
          />
        </ToggleButton>

        <ToggleButton value="right" aria-label="right aligned" size="small">
          <NightlightRoundOutlinedIcon
            sx={{ color: themeValue === "dark" ? "white" : "black" }}
          />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
