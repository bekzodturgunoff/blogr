import "./navbar.scss";
import images from "../../constants/images";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-logo-links">
          <img src={images.logo} alt="" />
          <ul>
            {" "}
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
          </ul>
        </div>
        <div className="nav-register">
          <button className="no-btn">Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
      <div className="nav-bottom">
        <h1>A modern publishing platform</h1>
        <p>Grow your audince and build online brand</p>
        <div className="nav-bottom-btn">
          <button>Start for free</button>
          <button className="border-btn">Learn more</button>
        </div>
      </div>
    </header>
  );
}
