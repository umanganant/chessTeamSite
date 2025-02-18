import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"; // Import CSS file
import logo from "./assets/ChessTeamLogo.jpg";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Centered Navigation Links */}
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/team">Meet the Team</Link>
          </li>
          <li>
            <Link to="/achievements">Achievements</Link>
          </li>

          {/* Dropdown Menu for Events */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropbtn">Events ▼</span>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/events/upcoming">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="/events/past">Past Events</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/playground">Chess Playground</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
