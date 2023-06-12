import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountDetails from "./pages/AccountDetails";
import Balance from "./pages/Balance";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
