import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authWrapper/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (userData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long!");
      return;
    }
    //console.log(userData);
    login(userData.username);
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-24 w-full">
      <form
        className="flex flex-col gap-4 w-[75%] p-4  place-items-center "
        onSubmit={onSubmit}
      >
        <h2 className="font-semibold text-black text-center mb-2">Login:</h2>
        <input
          placeholder="Username"
          className="border w-[20%] p-2 rounded-xl"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-[20%] p-2 rounded-xl"
          value={userData.password}
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
            setPasswordError("");
          }}
        />

        {passwordError && <p className="text-sm">{passwordError}</p>}

        <button type="submit" className="w-40">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
