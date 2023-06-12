import jwt_Decode from "jwt-decode";
import instance from "../api";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/api/auth/v3/login", userInfo);
    storeToken(data.token);
    return data;
  } catch (error) {
    throw error;
  }
};

const register = async (userInfo) => {
  try {
    console.log(userInfo);
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post("/api/auth/v3/register", formData);
    storeToken(data.token);
    return data;
  } catch (error) {
    if (error.response.data.name === "ValidationError") {
      alert(
        "Your password must contain at least 1 uppercase letter, 1 number, and no less than 8 characters"
      );
    } else if (error.response.data.name === "MongoServerError") {
      alert("This user already exists");
    }
    console.log(error);
    throw error;
  }
};

// const me = async () => {
//   try {
//     const { data } = await instance.get("/auth/me");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const getAllUsers = async () => {
  try {
    const { data } = await instance.get("/api/auth/v3/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = (token) => {
  localStorage.getItem("token");

  if (token) {
    const decode = jwt_Decode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("token");
};
export { login, register, getAllUsers, storeToken, checkToken, logout };
