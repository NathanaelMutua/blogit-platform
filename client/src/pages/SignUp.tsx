import { Box } from "@mui/material";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
      <Box
        minHeight="108vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SignUpForm />
      </Box>
    </>
  );
}

export default SignUp;
