import React, { Component } from 'react'
import './sidebar.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default class NewSidebar extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true,
    };
    M.Sidenav.init(this.Sidenav, options);
  }
  render() {
    return (
      <div>
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"></input>
        <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul class="sidebarMenuInner">
            <li><a href="https://vanila.io" target="_blank">Company</a></li>
            <li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
            <li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
            <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a></li>
            <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>
          </ul>
        </div>
      </div>
    )
  }
}