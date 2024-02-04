import React from "react";
import "./widgetSm.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <AccountCircleIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Yolo Kim</span>
            <span className="widgetSmUserTitle">SWE</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <AccountCircleIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Yolo Lee</span>
            <span className="widgetSmUserTitle">SWE</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <AccountCircleIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Yolo Park</span>
            <span className="widgetSmUserTitle">SWE</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
