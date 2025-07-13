import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: blue[800] },
    secondary: { main: blueGrey[800] },
    background: { default: "#fafafa", paper: "#ffffff" },
    text: { primary: grey[800], secondary: grey[600] },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  components: {
    // gives my cards more elevation/shadow effect
    MuiCard: {
      defaultProps: {
        elevation: 5,
      },
    },
  },
}); // had to use type any to avoid type casting

export default theme;
