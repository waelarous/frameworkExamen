import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#" id="fb">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <button id="search_btn" class="toolT" data-tooltip="Search">
                <i class="fas fa-search"></i>
              </button>
            </li>

            <li id="space2"></li>

            <li>
              {" "}
              <a class="toolT active" data-tooltip="Home" href="#" id="home">
                {" "}
                <i class="fas fa-home"></i>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a class="toolT" data-tooltip="Group" href="#" id="group">
                {" "}
                <i class="fas fa-user-friends"></i>{" "}
              </a>
            </li>
            <li>
              {" "}
              <a class="toolT" data-tooltip="Watch" href="#" id="tv">
                {" "}
                <i class="fas fa-tv    "></i>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a class="toolT" data-tooltip="Friend" href="#" id="friend">
                {" "}
                <i class="fas fa-user-alt    "></i>{" "}
              </a>{" "}
            </li>
            <li id="space1"></li>
            <li>
              {" "}
              <button class="toolT" data-tooltip="Add" id="btn_plus">
                <i class="fas fa-plus    "></i>
              </button>{" "}
            </li>
            <li>
              {" "}
              <button class="toolT" data-tooltip="Message" id="btn_msg">
                <i class="fab fa-facebook-messenger    "></i>
              </button>
            </li>
            <li>
              {" "}
              <button class="toolT" data-tooltip="Notification" id="btn_bell">
                {" "}
                <i class="fas fa-bell    "></i>
              </button>
            </li>
            <li>
              {" "}
              <button class="toolT" data-tooltip="Profile" id="btn_profile">
                <i class="fas fa-user-cog    "></i>
              </button>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
