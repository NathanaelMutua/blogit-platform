import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import axiosInstance from "../api/axios.instance";
import useUser from "../store/userStore";

function UserNavbar() {
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await axiosInstance.post("/api/auth/logout");
    console.log(user);
    console.log(response.data);
    logoutUser();
    navigate("/");
  }

  return (
    <Box component="section">
      <AppBar sx={{ backgroundColor: "rgb(251, 254, 255)" }}>
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              paddingRight: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.2rem",
            }}
          >
            <img src="/logo-main.png" alt="blogit-logo" height={"30px"} />
            <Typography
              variant="h1"
              fontSize="1.9rem"
              fontWeight="bold"
              color="primary"
            >
              BlogIt
            </Typography>
          </Link>
          <Stack
            direction="row"
            display="flex"
            alignItems="center"
            spacing={1.5}
          >
            <Link
              to="/blogs"
              style={{
                textDecoration: "none",
                color: "#37474f",
              }}
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                spacing={0.5}
                className="nav-link"
              >
                <MdOutlineLibraryBooks />
                <Typography variant="h3" fontSize="0.95rem">
                  Blogs
                </Typography>
              </Stack>
            </Link>
            <Link
              to="/create"
              style={{
                textDecoration: "none",
                color: "#37474f",
              }}
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                spacing={0.5}
                className="nav-link"
              >
                <FaPlus />
                <Typography variant="h3" fontSize="0.95rem">
                  Create Blog
                </Typography>
              </Stack>
            </Link>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            ml="auto"
            display="flex"
            alignItems="center"
          >
            <Box>
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "#37474f",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" textTransform="capitalize">
                  Welcome, {user?.firstName}
                </Typography>
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
                  {user?.firstName[0].toUpperCase()}
                  {user?.lastName[0].toUpperCase()}
                </Avatar>
              </Link>
            </Box>
            <Button
              variant="text"
              color="secondary"
              startIcon={<IoExitOutline />}
              onClick={handleLogout}
              sx={{ textTransform: "capitalize" }}
            >
              Sign-Out
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default UserNavbar;
