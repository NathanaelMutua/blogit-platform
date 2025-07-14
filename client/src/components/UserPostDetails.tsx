import { Box, Typography, CardContent, Card } from "@mui/material";

function UserPostDetails() {
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
          Your Posts
        </Typography>
        <Typography variant="body2" color="text.secondary">
          View & Update your posts
        </Typography>
        <CardContent></CardContent>
      </Card>
    </Box>
  );
}

export default UserPostDetails;
