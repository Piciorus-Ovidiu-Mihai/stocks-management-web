import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./auth/login/login";
import Register from "./auth/register/register";
import HomeContainer from "./pages/home/home-container";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/app/home" element={<HomeContainer />} />
      </Routes>
    </>
  );
}

export default App;
