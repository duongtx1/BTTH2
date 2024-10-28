import { Box, Grid2 } from "@mui/material";

const AdminPage = () => {
  return (
    <Grid2
      container
      spacing={{ sm: 0, md: 2 }}
      sx={{
        padding: { xs: 1, md: 2 },
        bgcolor: "secondary.light",
      }}
    >
      <Grid2 size={{ lg: 2, md: 3, sm: 0 }}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: 16,
            borderRadius: "15px",
            bgcolor: "#c4a589",
            minHeight: "calc(100vh - 32px)",
          }}
        >
          Side Panel
        </Box>
      </Grid2>
      <Grid2 size={"grow"}>
        <Box
          sx={{
            display: "block",
            bgcolor: "secondary.main",
            minHeight: "calc(100vh - 32px)",
            //Dong` nay` la` de test
            height: "8000px",
          }}
        >
          Main Content
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default AdminPage;
