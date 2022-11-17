import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header-2">
        <p>WELCOME</p>
      </div>
      <div className="main-menu-container">
        <div
          onClick={() => {
            navigate("/table");
          }}
          className="main-menu-item"
        >
          <p>GO TO USERS TABLE</p>
        </div>
        <div
          onClick={() => {
            navigate("/form", {
              state: { name: "", surname: "", phoneNumber: "", email: "" },
            });
          }}
          className="main-menu-item"
        >
          <p>SAVE A NEW USER</p>
        </div>
      </div>
    </div>
  );
};
export default MainMenu;
