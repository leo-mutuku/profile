import { Container, Grid, Typography, Link, Box } from "@mui/material";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const footerLinks = [
  {
    title: "Projects",
    links: ["Digital Wallets", "E-commerce", "Social Media", "Healthcare"],
  },
  {
    title: "Frameworks",
    links: ["Angular", "Vue Js", "React", "Spring boot", "Express js"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "FAQs", "Help Center"],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", icon: <Facebook /> },
      { name: "Twitter", icon: <Twitter /> },
      { name: "LinkedIn", icon: <LinkedIn /> },
      { name: "GitHub", icon: <GitHub /> },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3c70d9",
        color: "white",
        py: 4,
        width: "100%",
        textAlign: "center", // Center-align the text
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {footerLinks.map((column, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" gutterBottom>
                {column.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center-align items
                }}
              >
                {column.links.map((link, i) => (
                  <Box key={i} mb={1}>
                    {typeof link === "string" ? (
                      <Link href="#" color="inherit" underline="none">
                        {link}
                      </Link>
                    ) : (
                      <Link
                        href="#"
                        color="inherit"
                        underline="none"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {link.icon}
                        <Typography sx={{ ml: 1 }}>{link.name}</Typography>
                      </Link>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
