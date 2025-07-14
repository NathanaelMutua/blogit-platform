import {
  Box,
  Typography,
  CardContent,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import axiosInstance from "../api/axios.instance";
import LoadingComponent from "./LoadingComponent";
import { useQuery } from "@tanstack/react-query";
import FormattedDate from "./FormattedDateComponent";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

interface Blog {
  id: string;
  userId: string;
  title: string;
  synopsis: string;
  htmlContent: string;
  featureImage: string;
  createdAt: string;
}

function UserPostDetails() {
  const navigate = useNavigate();
  const user = useUserStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-user-blogs", user.user?.username],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/user/blogs");
      console.log(response);
      return response.data.userBlogs;
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
        <CardContent>
          <Stack spacing={2}>
            {data &&
              data.map((blog: Blog) => (
                <Card sx={{ padding: "2rem" }} key={blog.id}>
                  <Typography variant="h4" fontWeight="bold" fontSize="1.5rem">
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="0.9rem"
                    color="text.main"
                  >
                    {blog.synopsis}...
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="0.6rem"
                    color="primary"
                    py={1}
                  >
                    <FormattedDate isoDate={blog.createdAt} />
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      color="primary"
                      onClick={() => navigate(`/blogs/${blog.id}`)}
                    >
                      <FaRegEye />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => navigate(`/update/${blog.id}`)}
                    >
                      <FaEdit />
                    </IconButton>
                    <IconButton color="warning">
                      <MdOutlineDelete />
                    </IconButton>
                  </Stack>
                </Card>
              ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserPostDetails;
