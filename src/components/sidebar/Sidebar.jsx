import './sidebar.css';
// https://mui.com/ icon address website
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalAtmIcon from '@mui/icons-material/Paid';
import BarChartIcon from '@mui/icons-material/BarChart';

import { Link, useLocation } from 'react-router-dom';

const useUser = () => {
  return {
    name: 'John Doe',
    myTeam: 'likelion-sjsu-2023',
  };
};

function SideBarNavList({ to, children }) {
  const location = useLocation();

  const classname = location.pathname === to ? 'active ' : '';

  return (
    <Link to={to}>
      <li className={classname + 'sidebarListItem'}>{children}</li>
    </Link>
  );
}

export default function Sidebar() {
  const { myTeam } = useUser();
  console.log(location.pathname);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <SideBarNavList to={'/'}>
              <HomeWorkIcon className="sidebarIcon" />
              Home
            </SideBarNavList>
            <SideBarNavList to={`/team/${myTeam}`}>
              <TrendingUpIcon className="sidebarIcon" />
              Team
            </SideBarNavList>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick</h3>
          <ul className="sidebarList">
            <SideBarNavList>
              <PersonOutlineIcon className="sidebarIcon" />
              Users
            </SideBarNavList>
            <SideBarNavList>
              <StorefrontIcon className="sidebarIcon" />
              Products
            </SideBarNavList>
            <SideBarNavList>
              <LocalAtmIcon className="sidebarIcon" />
              Transactions
            </SideBarNavList>
            <SideBarNavList>
              <BarChartIcon className="sidebarIcon" />
              Reports
            </SideBarNavList>
          </ul>
        </div>
      </div>
    </div>
  );
}
