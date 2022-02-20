import React from "react";
import "./circularNavBottom.css";
import { Link } from "react-router-dom";

const CircularNavBarBottom = () => {
  return (
    <>
      <div id="menu">
        <input type="checkbox" id="menu-toggle" />
        <ul>
          <li>
            <Link to="/mod">&#x2756;</Link>
          </li>
          <li>
            <Link to="/apartment">&#x2616;</Link>
          </li>
          <li>
            <Link to="/mod">&#xa7;</Link>
          </li>
          <li>
            <Link to="/mod">&#x09F3;</Link>
          </li>
          <li>
            <Link to="/mod">&#x2708;</Link>
          </li>
          <li>
            <Link to="/mod">&#x2708;</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CircularNavBarBottom;
