import React from "react";
import "./header.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-right">
        <a>
          <img
            className="header-logo"
            src="https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc"
            alt="logo"
          />
        </a>
        <h1 className="header-title">Ferhat Sümer</h1>
      </div>
      <nav>
        <div className="header-nav-right">
          <FiSettings />
          <a href="" target="_blank">
            <h4>Ayarlar</h4>
          </a>
          <AiOutlineLogin />

          <a href="" target="_blank">
            <h4>Çıkış Yap</h4>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
