import { useAuth, useUsername } from "../login/authWrapper/AuthContext";
import { Link, Route } from "react-router-dom";

function Header() {
  const username = useUsername();
  const { logout } = useAuth();
  return (
    <header className="flex flex-col place-items-center justify-center w-full px-0 py-2">
      <div className="flex w-full justify-center place-items-center">
        <div className="flex-1"></div>
        <Link to="/" className="flex-1 decoration-transparent text-black">
          <h1>Niner TV Blog</h1>
        </Link>
        <div className="flex-1">
          {username ? (
            <p className="text-2xl">
              {" "}
              <br></br>
              <button onClick={logout}>Logout</button>{" "}
            </p>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
      <nav>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contacts">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
