import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import theme from "./assets/theme";
import "./App.css";
import Header from "./components/Header";
import BlogHomePage from "./pages/BlogHomePage";
import BlogListPage from "./pages/BlogListPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import Protected from "./components/Protected";
import BlogFullPage from "./pages/BlogFullPage";
import ProfilePage from "./pages/ProfilePage";
import UpdateBlog from "./pages/UpdateBlog";

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
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/blogs/:blogId" element={<BlogFullPage />} />
            <Route
              path="/create"
              element={
                <Protected>
                  <CreateBlogPage />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected>
                  <ProfilePage />
                </Protected>
              }
            />
            <Route
              path="/update/:blogId"
              element={
                <Protected>
                  <UpdateBlog />
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
