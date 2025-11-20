import React from "react";
import { useUsername } from "../login/authWrapper/AuthContext";
import { Link } from "react-router";
const LandingPage = () => {
  const username = useUsername();
  return (
    <div className="w-[100vh] h-[70vh] flex flex-col place-items-center justify-center">
      <h1>Welcome, {username ? username : null} to Niner TV Blog</h1>
      <p className="text-xl ">
        This web app allows users to browse and read posts while providing the
        option to log in and leave comments. It offers a clean and intuitive
        interface for easy navigation, with a secure login system that enables
        users to engage in discussions on the posts.
      </p>
      <div className="flex gap-4 items-center justify-center mt-4">
        <Link to="/blogs">
          <button>Explore</button>
        </Link>
        {username ? null : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
