import {
  Button,
  Card,
  TextField,
  Typography,
  Alert,
  Stack,
  Box,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (newUser: User) => {
      const response = await axios.post(
        "http://127.0.0.1:5800/api/auth/register",
        newUser
      );
      console.log(response.data);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setFormError(error.response?.data.message);
      } else {
        setFormError("An Error Occurred in Registration!");
      }
    },
  });

  function handleRegistration() {
    setFormError("");

    const newUser = {
      firstName,
      lastName,
      email,
      username,
      password,
    };
    mutate(newUser);
  }

  return (
    <>
      <Box width={{ xs: 1000, sm: 1000, md: 800, lg: 500 }}>
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
            Join BlogIt
          </Typography>
          {formError && <Alert severity="error">{formError}</Alert>}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Stack>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Stack>
          <Stack width="90%">
            <Typography
              variant="h5"
              fontWeight="bold"
              fontSize="0.9rem"
              color="secondary"
            >
              First Name
            </Typography>
            <TextField
              placeholder="first name"
              fullWidth
              size="small"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Stack>
          <Stack width="90%">
            <Typography
              variant="h5"
              fontWeight="bold"
              fontSize="0.9rem"
              color="secondary"
            >
              Last Name
            </Typography>
            <TextField
              placeholder="last name"
              fullWidth
              size="small"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Stack>
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
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRegistration}
            loading={isPending}
            sx={{ width: "90%" }}
          >
            Register
          </Button>
          <Typography variant="body2" fontSize="0.9rem">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Already have an account? SignIn
            </Link>
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default SignUpForm;
