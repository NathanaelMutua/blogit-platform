import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import theme from "./assets/theme";
import "./App.css";
import Header from "./components/Header";
import BlogHomePage from "./pages/BlogHomePage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<BlogHomePage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logout" element={<></>} />
            <Route path="/blogs" element={<></>} />
            <Route path="/create" element={<></>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
