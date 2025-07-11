import { Box, Stack, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function DefaultNavbar() {
  return (
    <Box component="section">
      <AppBar sx={{ backgroundColor: "rgb(251, 254, 255)" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", padding: 0 }}>
            <Typography
              variant="h1"
              fontSize="2.1rem"
              fontWeight="bold"
              color="primary"
            >
              BlogIt
            </Typography>
          </Link>
          <Stack direction="row" spacing={2} ml="auto">
            <Button variant="outlined">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "primary" }}
              >
                Login
              </Link>
            </Button>
            <Button variant="contained">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                SignUp
              </Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DefaultNavbar;
