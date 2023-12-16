import React from 'react'
import './sidebar.css'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

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
            </div>
        </div>
    )
}