import React from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

export default function Navbar() {
  return (
    <div className="navbar responsive">
      <a href="">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          style={{ width: "1.3rem" }}
        />
      </a>
      <div className="menu" id="navList">
        <a href="">Home</a>
        <a href="">Menu</a>
        <a href="">Services</a>
        <a href="">Map</a>
        <a href="">About</a>
      </div>
      <img
        src={menu}
        alt="Menu"
        className="menu-bar"
        style={{ width: "1.1rem" }}
      />
    </div>
  );
}
