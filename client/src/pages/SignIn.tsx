import { Box } from "@mui/material";
import SignInForm from "../components/SignInForm";

function SignIn() {
  return (
    <>
      <Box
        minHeight="100vh"
        pt={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SignInForm />
      </Box>
    </>
  );
}

export default SignIn;
