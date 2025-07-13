import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import { FiPenTool } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

function PageHeader() {
  const navigate = useNavigate();
  const user = useUserStore();
  const userState = useUserStore((state) => state.user);
  return (
    <>
      <Box
        component="section"
        minHeight="55vh"
        pt={11}
        sx={{ backgroundColor: "#0251acff" }}
      >
        <Stack display="flex" alignItems="center" p="3rem">
          <Box textAlign="center">
            <Typography
              variant="h2"
              fontSize="2.6rem"
              fontWeight="800"
              sx={{ paddingBottom: "0.9rem" }}
            >
              All the latest blogs{" "}
              {userState && (
                <span>
                  <br />
                  for you {user.user?.firstName}
                </span>
              )}
            </Typography>
            <Typography
              variant="body1"
              fontSize="1.1rem"
              color="#fff"
              sx={{ paddingBottom: "1.1rem" }}
            >
              Step inside BlogIt - a haven where stories bloom, ideas take
              flight, and every word builds the heartbeat of a curious
              community.
            </Typography>
            {userState ? (
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
                    color: "#37474f",
                    backgroundColor: "#fff",
                  }}
                  startIcon={<FiPenTool />}
                  onClick={() => navigate("/create")}
                >
                  Start Writing
                </Button>
              </Stack>
            ) : (
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
                    color: "#1565c0",
                    backgroundColor: "#fff",
                  }}
                  endIcon={<FaArrowRight />}
                  onClick={() => navigate("/register")}
                >
                  Join the Club
                </Button>
              </Stack>
            )}
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default PageHeader;
