import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import "./widgetSm.scss";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res =  await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  console.log(newUsers);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" /> Diplay
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
