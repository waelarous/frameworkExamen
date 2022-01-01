import React from "react";
import "./Sidebar.css";
import {
  RssFeed,
  HelpOutline,
  Event,
  WorkOutline,
  PlayCircleFilledOutlined,
  Group,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarItemListText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarItemListText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarItemListText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarItemListText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarItemListText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarItemListText">Groups</span>
          </li>
        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sideBarHr" />
        <ul className="sidebarFriendList">
          <li className="sideBarFriend">
            <img className="sidebarFriendImg" src="" alt="" />
            <span className="sidebarFriendName">Wael Arous</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
