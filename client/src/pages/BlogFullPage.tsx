import {
  Avatar,
  Box,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios.instance";
import LoadingComponent from "../components/LoadingComponent";
import FormattedDate from "../components/FormattedDateComponent";
import { useNavigate, useParams } from "react-router-dom";
import { IoShareSocialSharp } from "react-icons/io5";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import useUser from "../store/userStore";

function BlogFullPage() {
  const { blogId } = useParams();
  const user = useUser();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-all_tasks"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/blogs/${blogId}`);
      console.log(response.data);
      //   console.log(response.data.specificBlog.featureImage);
      const specificBlog = response.data.specificBlog;
      return specificBlog;
    },
  });
  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return;
  }
  return (
    <Box component="section">
      <Grid
        container
        paddingTop="6rem"
        paddingBottom="4rem"
        paddingInline="1rem"
        spacing={4}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <Grid size={{ xs: 12, sm: 10, lg: 8 }} key={data.id}>
          <Card
            sx={{
              minHeight: "31rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Stack component="div" height="24rem" width="100%">
              <CardMedia
                component="img"
                image={data.featureImage || "/blog-image.jpg"}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/blog-image.jpg";
                }}
                sx={{ objectFit: "cover", height: "100%" }}
              />
            </Stack>

            <Stack width="90%" textAlign="left">
              <CardContent>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  fontSize="1.9rem"
                  sx={{ paddingBottom: "0.5rem" }}
                >
                  {data.title}
                </Typography>
                <Typography variant="body2" fontSize="0.8rem">
                  {data.synopsis}
                </Typography>
                <Box
                  sx={{ mt: 2 }}
                  dangerouslySetInnerHTML={{
                    __html: `${data.htmlContent}`,
                  }}
                />
                <CardActions sx={{ paddingInline: 0 }}>
                  <Stack direction="row">
                    <IconButton color="primary">
                      <BiLike />
                    </IconButton>
                    <IconButton color="primary">
                      <IoShareSocialSharp />
                    </IconButton>
                    <IconButton color="primary">
                      <BiDislike />
                    </IconButton>
                  </Stack>
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
                      {data.user?.firstName[0].toUpperCase()}
                      {data.user?.lastName[0].toUpperCase()}
                    </Avatar>
                    <Stack spacing={0.1}>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        fontSize="0.8rem"
                      >
                        {data.user?.firstName} {data.user?.firstName}
                      </Typography>
                      <Typography variant="h6" fontSize="0.6rem">
                        {data.user?.username}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography
                    variant="h6"
                    fontSize="0.6rem"
                    textTransform="capitalize"
                  >
                    <FormattedDate isoDate={data.createdAt} />
                  </Typography>
                </Stack>
              </CardContent>
            </Stack>
          </Card>
          <Stack sx={{ paddingTop: "2rem" }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                fontSize: "0.7rem",
                mb: 2,
              }}
              onClick={() => navigate("/blogs")}
            >
              Return To Blogs
            </Button>
            {data.user?.username === user.user?.username && (
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "0.7rem",
                }}
                onClick={() => navigate("/profile")}
              >
                Profile
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BlogFullPage;
