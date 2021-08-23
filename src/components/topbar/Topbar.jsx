import { Settings } from "@material-ui/icons";
import { Language } from "@material-ui/icons";
import { NotificationsNone } from "@material-ui/icons";
import React from "react";
import "./topbar.scss";
export default function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">ramanAdmin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="https://images.pexels.com/photos/8640124/pexels-photo-8640124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
