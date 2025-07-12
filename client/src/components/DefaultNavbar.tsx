import { Box, Stack, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";

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
            <Button
              variant="contained"
              color="secondary"
              startIcon={<MdPersonOutline />}
            >
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  textTransform: "capitalize",
                  color: "#fff",
                }}
              >
                Sign-In
              </Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DefaultNavbar;
