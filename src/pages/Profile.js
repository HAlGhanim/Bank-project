import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { getProfile } from "../api/auth";
import { getBalance } from "../api/account";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  const { data: balance } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <div>{profile.username}</div>
      <img
        src={`https://coded-projects-api.herokuapp.com${profile.image}`}
        alt="profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <div>{balance.balance}</div>
    </div>
  );
};

export default Profile;
