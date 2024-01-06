import './sidebar.css';
// https://mui.com/ icon address website
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonOutlineIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalAtmIcon from '@mui/icons-material/Paid';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessagesIcon from '@mui/icons-material/Message';
import ManageIcon from '@mui/icons-material/Work';
import AnalyticsIcon from '@mui/icons-material/Timeline';
import ReportsIcon from '@mui/icons-material/ReportGmailerrorred';

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeWorkIcon />
              Home
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon />
              Analystics
            </li>
            <li className="sidebarListItem">
              <MonetizationOnIcon />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutlineIcon className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <LocalAtmIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailIcon className="sidebarIcon" />
              Email
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessagesIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <AnalyticsIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportsIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
