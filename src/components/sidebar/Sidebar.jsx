import "./sidebar.scss";
import SidebarMenu from "./SidebarMenu";
import { Timeline } from "@material-ui/icons";
import { TrendingUp } from "@material-ui/icons";
import { LineStyle } from "@material-ui/icons";
import { Report } from "@material-ui/icons";
import { WorkOutline } from "@material-ui/icons";
import { PermIdentity } from "@material-ui/icons";
import { Storefront } from "@material-ui/icons";
import { MailOutline } from "@material-ui/icons";
import { DynamicFeed } from "@material-ui/icons";
import { ChatBubbleOutline } from "@material-ui/icons";
import { AccountBalance } from "@material-ui/icons";
import { Assessment } from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SidebarMenu
          title="Dashboard"
          firstListItem="Home"
          firstListIcon={<LineStyle className="sidebarIcon" />}
          firstLink="/"
          secondListItem="Analytics"
          secondListIcon={<Timeline className="sidebarIcon" />}
          secondLink="/"
          thirdListIcon={<TrendingUp className="sidebarIcon" />}
          thirdListItem="Sales"
        />
        <SidebarMenu
          title="Quick Menu"
          firstListItem="Users"
          firstListIcon={<PermIdentity className="sidebarIcon" />}
          firstLink="/users"
          secondListItem="Products"
          secondListIcon={<Storefront className="sidebarIcon" />}
          secondLink="/products"
          thirdListItem="Transactions"
          thirdListIcon={<AccountBalance className="sidebarIcon" />}
          fourthListItem="Reports"
          fourthListIcon={<Assessment className="sidebarIcon" />}
    
        />
        <SidebarMenu
          title="Notifications"
          firstListItem="Mail"
          firstListIcon={<MailOutline className="sidebarIcon" />}
          firstLink="./"
          secondListItem="Feedback"
          secondListIcon={<DynamicFeed className="sidebarIcon" />}
          thirdListItem="Messages"
          thirdListIcon={<ChatBubbleOutline className="sidebarIcon" />}
        />
        <SidebarMenu
          title="Staff"
          firstListItem="Manage"
          firstListIcon={<WorkOutline className="sidebarIcon" />}
          firstLink="./"
          secondListItem="Analytics"
          secondListIcon={<TrendingUp className="sidebarIcon" />}
          thirdListItem="Reports"
          thirdListIcon={<Report className="sidebarIcon" />}
        />
      </div>
    </div>
  );
}
