import DefaultNavbar from "./components/DefaultNavbar";
import SignUp from "./pages/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <DefaultNavbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
