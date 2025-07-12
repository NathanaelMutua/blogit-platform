import {
  Button,
  Box,
  Typography,
  Card,
  Stack,
  TextField,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios.instance";
import useUser from "../store/userStore";

interface LoginDetails {
  userIdentifier: string;
  password: string;
}

function SignInForm() {
  const { setUser } = useUser();
  const [usernameState, setUsernameState] = useState(false);
  const [emailState, setEmailState] = useState(true);
  const [userIdentifier, setUserIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  function handleEmailToggle() {
    setUsernameState(true);
    setEmailState(false);
  }

  function handleUsernameToggle() {
    setUsernameState(false);
    setEmailState(true);
  }

  function handleSignIn() {
    const loginDetails = { userIdentifier, password };
    mutate(loginDetails);
  }

  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (loginDetails: LoginDetails) => {
      const response = await axiosInstance.post(
        "/api/auth/login",
        loginDetails
      );
      console.log(response.data);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setFormError(error.response?.data.game_of_throws);
      } else {
        setFormError("An Error Occurred in SignIn!");
      }
    },
    onSuccess: (data) => {
      setUser(data);
      setPassword("");
      setUserIdentifier("");
    },
  });

  return (
    <>
      <Box width={{ xs: 800, sm: 800, md: 800, lg: 500, xl: 600 }}>
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
          {formError && <Alert severity="error">{formError}</Alert>}
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
                value={userIdentifier}
                onChange={(e) => setUserIdentifier(e.target.value)}
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
              <TextField
                placeholder="username"
                fullWidth
                size="small"
                value={userIdentifier}
                onChange={(e) => setUserIdentifier(e.target.value)}
              />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "90%" }}
            onClick={handleSignIn}
            loading={isPending}
          >
            Sign In
          </Button>
          <Typography variant="body2" fontSize="0.9rem">
            <Link
              to="/register"
              style={{ textDecoration: "none" }}
              className="sign-in-toggle"
            >
              Don't have an account? SignUp
            </Link>
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default SignInForm;
