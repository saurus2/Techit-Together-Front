import "./topbar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Topbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(""); // State to store username

  useEffect(() => {
    // Set state only when the component mounts
    setIsLoggedIn(false);
    setUsername("");
  }, []); // Empty dependency array ensures this effect runs only once

  const logIn = () => {
    navigate("/login");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(""); // Reset username
  };

  const homeNav = () => {
    navigate("/");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div onClick={homeNav} className="logo">
            Techit-Together
          </div>
        </div>
        <div className="topRight">
          {isLoggedIn ? (
            <div>
              <div className="topbarUsername">Hello, {username}</div>
              <button onClick={logOut} className="logout">
                Log out
              </button>
            </div>
          ) : (
            <div className="topbarUsername">Hello, Guest</div>
          )}
          {/* topbarIcon */}
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          {/* topbarIcon */}
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          {/* topbarIcon */}
          <div className="topbarIconContainer">
            <SettingsIcon />
            <span className="topIconBadge">2</span>
          </div>
          {/* topbarIcon */}
          <div onClick={logIn} className="topIconBadgeAvatar">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
