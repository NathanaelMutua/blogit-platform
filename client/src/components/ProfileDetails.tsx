import {
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
  TextField,
  CardActions,
  Button,
} from "@mui/material";

function ProfileDetails() {
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
          <Stack pb={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
              First Name
            </Typography>
            <TextField placeholder="First Name" size="small" />
          </Stack>
          <Stack pb={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
              Last Name
            </Typography>
            <TextField placeholder="Last Name" size="small" />
          </Stack>
          <Stack pb={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
              Username
            </Typography>
            <TextField placeholder="Username" size="small" />
          </Stack>
          <Stack pb={1}>
            <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
              Profile Image
            </Typography>
            <TextField placeholder="Profile Image URL" size="small" />
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Update profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProfileDetails;
