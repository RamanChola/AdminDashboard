import { Settings } from "@material-ui/icons";
import { Language } from "@material-ui/icons";
import { NotificationsNone } from "@material-ui/icons";
import axios from "axios";
import React, { useContext } from "react";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./topbar.scss";
export default function Topbar() {
  const { isFetching, dispatch } = useContext(AuthContext);

  const HandleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
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
            <div className="profile">
              <img
                src="https://images.pexels.com/photos/8640124/pexels-photo-8640124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="topAvatar"
              />
              <div className="options">
                <span onClick={HandleLogout}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
