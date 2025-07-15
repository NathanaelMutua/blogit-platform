import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import useUser from "../store/userStore";
import ProfileDetails from "../components/ProfileDetails";
import UserPostDetails from "../components/UserPostDetails";
import AccountSettings from "../components/AccountSettings";

function ProfilePage() {
  const user = useUser();
  return (
    <div>
      <Box
        component="section"
        paddingTop={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
        >
          <Avatar
            src={`${user.user?.profileImage || "/avatar.jpg"}`}
            sx={{ height: "10rem", width: "10rem", marginRight: "1rem" }}
          />
          <Stack>
            <Typography variant="h2" fontSize="1.8rem" fontWeight="bold">
              {user.user?.firstName} {user.user?.lastName}
            </Typography>
            <Typography variant="h6" fontSize="0.8rem" color="text.secondary">
              @{user.user?.username}
            </Typography>
            <Typography variant="h6" fontSize="0.6rem" color="text.secondary">
              {user.user?.email}
            </Typography>
          </Stack>
        </Stack>

        <Typography>View Posts . Edit Profile . Update Security</Typography>

        <Grid container spacing={3} padding="1rem 2rem">
          <Grid size={{ lg: 6 }}>
            <ProfileDetails />
            <AccountSettings />
          </Grid>
          <Grid size={{ lg: 6 }}>
            <UserPostDetails />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProfilePage;
