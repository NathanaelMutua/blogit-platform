import "./App.css";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  profileImage: string;
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");

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
  });

  function handleRegistration() {
    const newUser = {
      firstName,
      lastName,
      email,
      username,
      password,
      profileImage,
    };
    mutate(newUser);
  }

  return (
    <>
      <Box width="600px" margin="auto" p="2rem">
        <Typography variant="h2" fontWeight="bold" fontSize="2rem">
          Registration Form
        </Typography>
        <Card
          sx={{
            padding: "2rem 3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <TextField
            label="first name"
            fullWidth
            size="small"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="last name"
            fullWidth
            size="small"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="username"
            fullWidth
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="email"
            type="email"
            fullWidth
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="password"
            type="password"
            fullWidth
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="image url"
            fullWidth
            size="small"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleRegistration}
            fullWidth
            loading={isPending}
          >
            Register
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default App;
