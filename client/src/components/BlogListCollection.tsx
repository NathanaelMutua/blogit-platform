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
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios.instance";
import LoadingComponent from "./LoadingComponent";
import FormattedDate from "./FormattedDateComponent";
import { useNavigate } from "react-router-dom";

interface BlogUser {
  firstName: string;
  lastName: string;
  username: string;
}

interface Blog {
  id: string;
  userId: string;
  title: string;
  synopsis: string;
  htmlContent: string;
  featureImage: string;
  createdAt: string;
  user?: BlogUser;
}

function BlogListCollection() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-blog-list"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/blogs");
      console.log(response);
      return response.data.blogs;
    },
  });
  if (isLoading) {
    return (
      <Box paddingTop={6}>
        <LoadingComponent />
      </Box>
    );
  }

  if (isError) {
    return;
  }
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
        {data &&
          data.map((blog: Blog) => (
            <Grid size={{ xs: 11, sm: 8, md: 6, lg: 4 }} key={blog.id}>
              <Card
                sx={{
                  minHeight: "34rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Stack component="div" height="15rem" width="100%">
                  <CardMedia
                    component="img"
                    image={blog.featureImage}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/blog-image.jpg";
                    }}
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
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" fontSize="0.8rem">
                      {blog.synopsis}
                    </Typography>
                    <CardActions sx={{ paddingInline: 0 }}>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          padding: "0.1rem 1rem",
                        }}
                        onClick={() => navigate(`/blogs/${blog.id}`)}
                      >
                        read more
                      </Button>
                    </CardActions>
                    <Stack
                      width="100%"
                      direction="row"
                      display="flex"
                      justifyContent="space-between"
                      pt={2}
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
                          {blog.user?.firstName && blog.user?.lastName
                            ? blog.user.firstName[0].toUpperCase() +
                              blog.user.lastName[0].toUpperCase()
                            : "XX"}
                        </Avatar>
                        <Stack spacing={0.1}>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            fontSize="0.8rem"
                            textTransform="capitalize"
                          >
                            {blog.user?.firstName} {blog.user?.lastName}
                          </Typography>
                          <Typography variant="h6" fontSize="0.6rem">
                            {blog.user?.username}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography
                        variant="h6"
                        fontSize="0.6rem"
                        textTransform="capitalize"
                      >
                        <FormattedDate isoDate={blog.createdAt} />
                      </Typography>
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default BlogListCollection;
