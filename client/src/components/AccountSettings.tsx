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

function AccountSettings() {
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
              nathanael@emai.com
            </Typography>
          </Stack>
          <hr />
          <Stack py={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="1rem">
              Email Address
            </Typography>
            <Typography variant="h5" fontSize="0.7rem">
              nathanael@emai.com
            </Typography>
          </Stack>
          <hr />
          <Stack py={3}>
            <Stack pb={3}>
              <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
                Current Password
              </Typography>
              <TextField placeholder="Username" size="small" />
            </Stack>
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
                New Password
              </Typography>
              <TextField placeholder="Username" size="small" />
            </Stack>
            <Stack pb={1}>
              <Typography variant="h5" fontWeight="bold" fontSize="0.9rem">
                Confirm Password
              </Typography>
              <TextField placeholder="Username" size="small" />
            </Stack>
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

export default AccountSettings;
