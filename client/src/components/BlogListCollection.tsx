import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

function BlogListCollection() {
  return (
    <Box component="section">
      <Grid
        container
        padding="2rem"
        spacing={4}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <Grid size={{ xs: 11, sm: 8, md: 6, lg: 4 }}>
          <Card
            sx={{
              minHeight: "31rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Stack component="div" height="15rem" width="100%">
              <CardMedia
                component="img"
                image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                sx={{
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </Stack>
            <Stack width="90%" textAlign="left">
              <CardContent>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  fontSize="1.2rem"
                  sx={{ paddingBottom: "0.5rem" }}
                >
                  “A Techie's Escape: Safari Adventures Through a Developer's
                  Lens”
                </Typography>
                <Typography variant="body2" fontSize="0.8rem">
                  “A Techie's Escape: Safari Adventures Through a Developer's
                  Lens”“A Techie's Escape: Safari Adventures Through a
                  Developer's Lens”
                </Typography>
                <Stack
                  position="absolute"
                  bottom="1.2rem"
                  width="90%"
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  pr={4}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{
                        backgroundColor: "#1565c0",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        width: "2rem",
                        height: "2rem",
                      }}
                    >
                      NA
                    </Avatar>
                    <Stack spacing={0.1}>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        fontSize="0.8rem"
                      >
                        Nathanael Mutua
                      </Typography>
                      <Typography variant="h6" fontSize="0.6rem">
                        Nathanael Mutua
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography
                    variant="h6"
                    fontSize="0.6rem"
                    textTransform="capitalize"
                  >
                    july 11, 2025
                  </Typography>
                </Stack>
              </CardContent>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BlogListCollection;
