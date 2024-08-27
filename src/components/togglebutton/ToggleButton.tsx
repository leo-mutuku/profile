import * as React from "react";

import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
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
          <LightModeOutlinedIcon />
        </ToggleButton>

        <ToggleButton value="right" aria-label="right aligned" size="small">
          <NightlightRoundOutlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
