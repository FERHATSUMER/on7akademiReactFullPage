import React from "react";
import { PiBooks, PiExamLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img
          className="sidebar-logo"
          src="https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc"
          alt="logo"
        />
        <h3 className="sidebar-title">Kullanıcı Paneli</h3>
      </div>
      <div className="sidebar-menu">
        <a href="/">
          <AiOutlineHome className="sidebar-icon" />
          <h3> Ana Sayfa</h3>
        </a>
        <div className="sidebar-menu-item">
          <a href="/context">
            <PiBooks className="sidebar-icon" />
            <h4> Dersler</h4>
          </a>
          <a href="/card">
            <PiExamLight className="sidebar-icon" />
            <h4>Sınavlar</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
