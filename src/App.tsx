import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Login from "./auth/login/login";
import Register from "./auth/register/register";
import HomeContainer from "./pages/home/home-container";
import StatisticContainer from "./pages/statistics/statistics-container";
import StoreContainer from "./pages/store/store-container";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/app" element={<HomeContainer />}/>
        <Route path="/app/store" element={<StoreContainer/>}/>
        <Route path="/app/statistics" element={<StatisticContainer/>}/>
        <Route path="/" element={<Navigate to="/app" replace />}/>
        <Route path='*' element={<HomeContainer/>}/>
      </Routes>
    </>
  );
}

export default App;
