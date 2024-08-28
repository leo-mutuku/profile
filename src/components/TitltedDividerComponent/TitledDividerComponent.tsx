import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const TitltedDividerComponent: React.FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          transform: "rotate(45deg)", // Adjust the angle as needed
          height: "100px", // Adjust the height as needed
        }}
      />
    </Box>
  );
};

export default TitltedDividerComponent;
