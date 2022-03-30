import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./auth/login/login";
import Register from "./auth/register/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
