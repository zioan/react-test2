import React from "react";
import "./Layout.css";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="contentArea">
        <div className="content">
          <h1>Demo Website</h1>
          <div>{children}</div>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
