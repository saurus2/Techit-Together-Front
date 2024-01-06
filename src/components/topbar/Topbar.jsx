import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">Techit-Together</div>
        </div>
        <div className="topRight">
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
          <div className="topIconBadgeAvatar">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
