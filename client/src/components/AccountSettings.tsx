import {
  Box,
  Typography,
  CardContent,
  Stack,
  Button,
  CardActions,
  Card,
  TextField,
} from "@mui/material";
import useUser from "../store/userStore";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios.instance";

interface Passwords {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

function AccountSettings() {
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["update-password"],
    mutationFn: async (passwordDetails: Passwords) => {
      const response = await axiosInstance.patch(
        "/api/user/password",
        passwordDetails
      );
      return response.data;
    },
  });

  function handlePasswordUpdate() {
    const passwordDetails = {
      password: currentPassword,
      newPassword,
      confirmPassword,
    };
    mutate(passwordDetails);
    setNewPassword("");
    setCurrentPassword("");
    setConfirmPassword("");
  }

  return (
    <Box>
      <Card
        sx={{
          padding: "3rem",
          marginBlock: "2rem",
        }}
      >
        <Typography variant="h3" fontSize="2rem" fontWeight="bold">
          Account Settings
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Update your password if need be
        </Typography>
        <CardContent>
          <Stack py={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="1rem">
              Email Address
            </Typography>
            <Typography variant="h5" fontSize="0.7rem">
              {user?.email}
            </Typography>
          </Stack>
          <hr />
          <Stack py={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="1rem">
              Username
            </Typography>
            <Typography variant="h5" fontSize="0.7rem">
              {user?.username}
            </Typography>
          </Stack>
          <hr />
          <Stack py={3}>
            <Stack pb={3}>
              <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
                Current Password
              </Typography>
              <TextField
                placeholder="Current Password"
                size="small"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Stack>
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
                New Password
              </Typography>
              <TextField
                placeholder="New Password"
                size="small"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Stack>
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
                Confirm Password
              </Typography>
              <TextField
                placeholder="Confirm Password"
                size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePasswordUpdate}
          >
            Update profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default AccountSettings;
