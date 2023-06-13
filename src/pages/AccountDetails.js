import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { getProfile } from "../api/auth";
import { depositBalance, getBalance } from "../api/account";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const AccountDetails = () => {
  const [user, setUser] = useContext(UserContext);
  const [amount, setAmount] = useState(0);
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { mutate: depo } = useMutation({
    mutationFn: () => depositBalance(),
  });
  const handleDepo = (e) => {
    e.preventDefault();
    depositBalance();
  };

  const { data: balance } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="bg-gray-900 min-h-screen h-screen flex flex-col items-center justify-center absolute inset-0 z-[-1] text-white">
      <div className="bg-gray-600 w-[80%] h-[80%] flex justify-between rounded-lg">
        <div className="bg-gray-600 w-[20%] h-[20%] flex flex-row items-center justify-center my-5 mx-5 rounded-lg border-8 border-white">
          <div className="my-40 text-lg lex flex-col">
            <div>
              <span className="font-bold">Username:</span> {profile.username}
            </div>
            <div>
              <span className="font-bold">Balance:</span> {balance.balance}
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-20 mt-5 justify-around h-[20%]">
          <button
            className="bg-gray-900 rounded-md p-2 border-2 border-white"
            onClick={handleDepo}
          >
            Deposit
          </button>
          <button className="bg-gray-900 rounded-md p-2 border-2 border-white">
            Withdraw
          </button>
          <button className="bg-gray-900 rounded-md p-2 border-2 border-white">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
