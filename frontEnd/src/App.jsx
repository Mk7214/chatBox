import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";

function App() {
  const { auth } = useAuthContext();
  return (
    <div className="w-full h-full p-3 items-center justify-center overflow-hidden bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-0 bg-clip-padding">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/signUp"
          element={auth ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
