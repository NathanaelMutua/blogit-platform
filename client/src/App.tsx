import DefaultNavbar from "./components/DefaultNavbar";
import SignUp from "./pages/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <DefaultNavbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
