import {
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
  TextField,
  CardActions,
  Button,
  Alert,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axiosInstance from "../api/axios.instance";
import axios from "axios";

interface User {
  firstName: string;
  lastName: string;
  profileImage: string;
}

function ProfileDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [formError, setFormError] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["update-user"],
    mutationFn: async (updatedUser: User) => {
      const response = await axiosInstance.patch("/api/user", updatedUser);
      console.log(response.data);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setFormError(error.response?.data.game_of_throws);
      } else {
        setFormError("An Error Occurred in SignUp!");
      }
    },
  });

  function handleProfileUpdate() {
    setFormError("");
    const updatedUser = {
      firstName,
      lastName,
      profileImage,
    };
    mutate(updatedUser);
    setFirstName("");
    setLastName("");
    setProfileImage("");
  }

  return (
    <Box>
      <Card
        sx={{
          width: { xs: 1000, sm: 900, md: 900, lg: 900 },
          padding: "3rem",
          marginBlock: "2rem",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Profile Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Update your personal information and personal details
        </Typography>
        <CardContent>
          {formError && <Alert severity="error">{formError}</Alert>}
          <Stack pb={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
              First Name
            </Typography>
            <TextField
              placeholder="First Name"
              size="small"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Stack>
          <Stack pb={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
              Last Name
            </Typography>
            <TextField
              placeholder="Last Name"
              size="small"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Stack>
          <Stack pb={1}>
            <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
              Profile Image
            </Typography>
            <TextField
              placeholder="Profile Image URL"
              size="small"
              type="url"
              onChange={(e) => setProfileImage(e.target.value)}
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleProfileUpdate}
          >
            Update profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProfileDetails;
