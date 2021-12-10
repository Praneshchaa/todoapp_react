import React from "react";
import "../scss/_header.scss";
import check from "../assests/image/square-check-solid.svg";

function Header() {
  return (
    <div className="main">
      <div className="head">
        <img className="check-image" src={check}></img>
        <h1 className="headeredt row">My Todo-s</h1>
      </div>
    </div>
  );
}

export default Header;
