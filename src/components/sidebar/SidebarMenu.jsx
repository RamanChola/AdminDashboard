import React from "react";
import { Link } from "react-router-dom";
export default function SidebarMenu(props) {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{props.title}</h3>
      <ul className="sidebarList">
        <Link to={props.firstLink} className="link">
          <li className="sidebarListItem">
            {props.firstListIcon}
            {props.firstListItem}
          </li>
        </Link>
        <Link to={props.secondLink} className="link">
          <li className="sidebarListItem">
            {props.secondListIcon}
            {props.secondListItem}
          </li>
        </Link>
        <Link to={props.thirdLink} className="link">
          <li className="sidebarListItem">
            {props.thirdListIcon}
            {props.thirdListItem}
          </li>
        </Link>
        {props.fourthListItem && (
          <li className="sidebarListItem">
            {props.fourthListIcon}
            {props.fourthListItem}
          </li>
        )}
      </ul>
    </div>
  );
}
