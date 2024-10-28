import { Button, Typography, Box, Grid, Container } from "@mui/material";
import model from "../assets/model.jpg";

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: "#FBFAF1", padding: "25px 0" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              Unlock the Secrets to Radiant Skin
            </Typography>
            <Typography style={{ margin: "20px 0", color: "#777" }}>
              We're here to provide the best skincare and beauty products, which
              help you to be the real you!
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Shop Now
            </Button>
          </Grid>

          {/* Right Side Image */}
          <Grid item xs={12} md={6}>
            <Box style={{ position: "relative", textAlign: "center" }}>
              <img
                src={model}
                alt="Model"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "20px",
                }}
              />
              <Box>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#ff6a00", color: "#fff" }}
                >
                  Limited Offer - 20% Off
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
