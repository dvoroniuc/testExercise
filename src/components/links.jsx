import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class FileName extends Component {
  render() {
    return (
      <div className="links">
        <NavLink activeClassName="active" to="myfonts">
          MY FONTS
        </NavLink>
        &nbsp; &nbsp;
        <NavLink activeClassName="active" to="buyfonts">
          BUY FONTS
        </NavLink>
      </div>
    );
  }
}
