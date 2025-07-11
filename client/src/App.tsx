import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import DefaultNavbar from "./components/DefaultNavbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import theme from "./assets/theme";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DefaultNavbar />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
