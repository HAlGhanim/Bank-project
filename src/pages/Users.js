import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getAllUsers } from "../api/auth";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useContext(UserContext);
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  //   console.log(users);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="bg-gray-900 min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-gray-800 rounded-md shadow-md max-h-[80%]">
        <h2 className="text-3xl text-white font-semibold mb-6 ">Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {users?.map((user) => (
            <div
              key={user._id}
              className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center"
            >
              <img
                src={`https://coded-projects-api.herokuapp.com${user.image}`}
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg text-white font-semibold mb-2">
                  {user.username}
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg text-white font-semibold mb-2">
                  {user.account}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
