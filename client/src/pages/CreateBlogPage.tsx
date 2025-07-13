import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Stack,
  Grid,
  Alert,
} from "@mui/material";
import { useState } from "react";
import Markdown from "../components/Markdown";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios.instance";
import { useNavigate } from "react-router-dom";

interface Blog {
  title: string;
  synopsis: string;
  content: string;
  featureImage: string;
}

function CreateBlogPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const [featureImage, setFeatureImage] = useState("");
  const [formError, setFormError] = useState("");

  function clearData() {
    setTitle("");
    setSynopsis("");
    setContent("");
    setFeatureImage("");
  }

  function handleCreateBlog() {
    const newBlog = { title, synopsis, content, featureImage };
    mutate(newBlog);
    clearData();
    navigate("/blogs");
  }

  const { isPending, mutate } = useMutation({
    mutationKey: ["create-blog"],
    mutationFn: async (newBlog: Blog) => {
      const response = await axiosInstance.post("/api/blogs", newBlog);
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

  return (
    <Box minHeight="100vh" paddingTop={10}>
      <Grid container padding="1rem 3rem" spacing={2} justifyContent="center">
        <Grid size={{ xs: 11, sm: 11, md: 8, lg: 5 }}>
          <Card sx={{ maxWidth: 700, margin: "auto", p: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Create Blog Post
              </Typography>
              {formError && <Alert severity="error">{formError}</Alert>}
              <Stack spacing={3}>
                <TextField
                  name="title"
                  size="small"
                  label="Title"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  name="synopsis"
                  label="Synopsis"
                  fullWidth
                  multiline
                  rows={2}
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                />
                <TextField
                  name="markdownContent"
                  label="Content (Markdown)"
                  fullWidth
                  multiline
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <TextField
                  name="url"
                  size="small"
                  label="Feature Image URL"
                  fullWidth
                  value={featureImage}
                  onChange={(e) => setFeatureImage(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "capitalize" }}
                  onClick={handleCreateBlog}
                  loading={isPending}
                >
                  Publish
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 11, sm: 11, md: 8, lg: 5 }}>
          <Card sx={{ maxWidth: 600, margin: "auto", p: 3 }}>
            <CardContent>
              <Typography variant="h5">Preview</Typography>
              <Typography variant="body1" fontSize="0.8rem" gutterBottom>
                How Your post will look
              </Typography>
              <Stack spacing={3}>
                {featureImage && (
                  <Box
                    sx={{
                      backgroundImage: `url${featureImage}`,
                      objectFit: "cover",
                      width: "100%",
                      height: "9rem",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={`${featureImage}`}
                      alt="blog post featured image"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>
                )}

                {title ? (
                  <Typography variant="h4" fontWeight="bold" fontSize="2rem">
                    {title}
                  </Typography>
                ) : (
                  <Typography variant="h4" fontWeight="bold" fontSize="2.1rem">
                    Your Title
                  </Typography>
                )}
                {synopsis ? (
                  <Typography variant="body1" fontSize="0.8rem">
                    {synopsis}
                  </Typography>
                ) : (
                  <Typography variant="body1" fontSize="0.8rem">
                    A brief description about your blog post right here...
                  </Typography>
                )}
                <hr />
                {content ? (
                  <Markdown>{content}</Markdown>
                ) : (
                  <Typography variant="body1" fontSize="1.1rem">
                    Your content for your blog post will appear right here...
                  </Typography>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateBlogPage;
