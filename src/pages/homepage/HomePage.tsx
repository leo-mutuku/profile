import Grid from "@mui/material/Grid";

type HomePageProps = {
  themeValue: string;
};
const HomePage = ({ themeValue }: HomePageProps) => {
  return (
    <Grid
      container
      gap={3}
      sx={{
        background: themeValue === "dark" ? "black" : "white",
        padding: "15px 30px",
      }}
    ></Grid>
  );
};

export default HomePage;
