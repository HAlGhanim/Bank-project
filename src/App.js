import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AccountDetails from "./pages/AccountDetails";
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
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details" element={<AccountDetails />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
