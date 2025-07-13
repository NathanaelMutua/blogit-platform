import { Box, Button, Stack, Typography } from "@mui/material";
import useUserStore from "../store/userStore";
import { FaArrowRight } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  return (
    <>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack display="flex" alignItems="center">
          <Typography
            variant="h2"
            fontWeight="bold"
            fontSize="3.5rem"
            textAlign="center"
            sx={{ width: { xs: 600, sm: 600, md: 600, lg: 600 } }}
          >
            Share Your Stories,
            <br /> Inspire the World
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontSize="1.3rem"
            textAlign="center"
            padding="1.5rem 2rem"
            sx={{ width: { xs: 800, sm: 800, md: 800, lg: 800 } }}
          >
            BlogIt is where passionate writers come together to share ideas,
            tell stories, and build a community around the power of words.
          </Typography>
          {user ? (
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2rem"
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  padding: "0.5rem 2rem",
                  fontSize: "1rem",
                }}
                color="primary"
                startIcon={<FiPenTool />}
              >
                Start Writing
              </Button>
            </Stack>
          ) : (
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2rem"
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  padding: "0.5rem 2rem",
                  fontSize: "1rem",
                }}
                color="secondary"
                endIcon={<FaArrowRight />}
                onClick={() => navigate("/register")}
              >
                Get started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  padding: "0.5rem 2rem",
                  fontSize: "1rem",
                }}
                color="primary"
                endIcon={<MdOutlineLibraryBooks />}
              >
                Explore stories
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
    </>
  );
}

export default HeroSection;
