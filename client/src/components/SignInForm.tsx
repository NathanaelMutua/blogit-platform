import { Button, Box, Typography, Card, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  const [usernameState, setUsernameState] = useState(false);
  const [emailState, setEmailState] = useState(true);

  function handleEmailToggle() {
    setUsernameState(true);
    setEmailState(false);
  }

  function handleUsernameToggle() {
    setUsernameState(false);
    setEmailState(true);
  }

  return (
    <>
      <Box width={{ xs: 1000, sm: 1000, md: 800, lg: 500, xl: 600 }}>
        <Card
          sx={{
            padding: " 2rem 3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            fontSize="1.6rem"
            color="primary"
          >
            Sign In to BlogIt
          </Typography>
          {emailState && (
            <Stack width="90%">
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize="0.9rem"
                color="secondary"
              >
                Email
              </Typography>
              <TextField
                placeholder="email"
                type="email"
                fullWidth
                size="small"
              />
            </Stack>
          )}
          {usernameState && (
            <Stack width="90%">
              <Typography
                variant="h5"
                fontWeight="bold"
                fontSize="0.9rem"
                color="secondary"
              >
                Username
              </Typography>
              <TextField placeholder="username" fullWidth size="small" />
            </Stack>
          )}
          <Stack width="90%">
            <Typography
              variant="h5"
              fontWeight="bold"
              fontSize="0.9rem"
              color="secondary"
            >
              Password
            </Typography>
            <TextField
              placeholder="password"
              type="password"
              fullWidth
              size="small"
            />
          </Stack>
          {emailState && (
            <Button
              variant="text"
              sx={{ textTransform: "capitalize" }}
              onClick={handleEmailToggle}
            >
              Sign In with Username instead?
            </Button>
          )}
          {usernameState && (
            <Button
              variant="text"
              sx={{ textTransform: "capitalize" }}
              onClick={handleUsernameToggle}
            >
              Sign In with Email instead?
            </Button>
          )}
          <Button variant="contained" color="secondary" sx={{ width: "90%" }}>
            Sign In
          </Button>
          <Typography variant="body2" fontSize="0.9rem">
            <Link to="/register" style={{ textDecoration: "none" }}>
              Don't have an account? SignUp
            </Link>
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default SignInForm;
