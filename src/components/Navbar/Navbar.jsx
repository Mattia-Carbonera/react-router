import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <button className="btn btn-dark">
            <Link to={"/"}>Home Page</Link>
          </button>
        </li>
        <li>
          <button className="btn btn-dark">
            <Link to={"/about"}>About Us</Link>
          </button>
        </li>
        <li>
          <button className="btn btn-dark">
            <Link to={"/posts"}>My Posts</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
