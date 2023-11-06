import { FcVideoCall } from "react-icons/fc";
import "./context.css";
import { MdLiveTv } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
const Context = () => {
  return (
    <div className="context-container">
      <h1 className="contenth1">On7 Akademi</h1>
      <div className="content-info-container">
        <div className="content-info">
          <h2 className="info-title">Staj Eğtimi</h2>
          <div className="info-buttons-container">
            <button className="info-button">
              <AiOutlineProfile /> Dosyalar
            </button>
            <button className="info-button">
              <MdLiveTv /> Derse Katıl
            </button>
            <button className="info-button">
              <FcVideoCall /> Kayıtlı Dersler
            </button>
          </div>
        </div>
        <div className="content-info">
          <h2 className="info-title">Staj Eğtimi 2</h2>
          <div className="info-buttons-container">
            <button className="info-button">
              <AiOutlineProfile /> Dosyalar
            </button>
            <button className="info-button">
              <MdLiveTv /> Derse Katıl
            </button>
            <button className="info-button">
              <FcVideoCall /> Kayıtlı Dersler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;
