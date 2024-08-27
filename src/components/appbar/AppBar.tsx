import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import the MenuIcon component from Material-UI

<style>
  {`
    .appbar {
      background-color: white;
      width: 100%;
      border-bottom: 1px solid #e0e0e0;
    }

    .menu-icon {
      margin-right: 16px;
      color: blue;
    }

    .title {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 600;
      color: #333;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      margin: 0;
      padding: 0;
    }
  `}
</style>;

const AppBarComponent = () => {
  return (
    <AppBar position="relative" className="appbar">
      <Toolbar variant="dense">
        <IconButton edge="start" aria-label="menu" className="menu-icon">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" className="title">
          Leo Profile
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
