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
    <div className="bg-gray-900 min-h-screen h-screen flex flex-col items-center justify-center absolute inset-0 z-[-1] text-white">
      <div className="bg-gray-600 w-[50%] h-[70%] flex flex-col items-center justify-center py-1 my-10 rounded-lg border-8 border-white">
        <img
          src={`https://coded-projects-api.herokuapp.com${profile.image}`}
          alt="profile"
          className="w-56 h-56 rounded-full mb-4"
        />
        <div className="my-40 text-lg">
          <div>
            <span className="font-bold">Username:</span> {profile.username}
          </div>
          <div>
            <span className="font-bold">Balance:</span> {balance.balance}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
