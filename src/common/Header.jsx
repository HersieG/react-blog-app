import { useAuth, useUsername } from "../login/authWrapper/AuthContext";
import { Link, Route } from "react-router-dom";

function Header() {
  const username = useUsername();
  const { logout } = useAuth();
  return (
    <header className="flex flex-col place-items-center justify-center w-full px-0 py-2">
      <Link to="/" className="decoration-transparent text-black">
        <h1>Niner TV Blog</h1>
      </Link>
      <nav>
        <Link to="/blogs">Home</Link>
        <Link to="/contacts">Contact</Link>
        {username ? (
          <p className="text-2xl">
            {" "}
            Hello {username} <br></br>
            <button onClick={logout}>Logout</button>{" "}
          </p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
