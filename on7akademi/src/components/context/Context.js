import { FcVideoCall } from "react-icons/fc";
import { MdLiveTv } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import './context.css'
const Context = () => {
  return (
    <div className="container">
    <h1 className="contenth1">On7 Akademi</h1>
    <div className="contentInfoContainer">
      <div className="contentInfo">
        <h2 className="infoTitle">Staj Eğtimi</h2>
        <div className="infoButtonsContainer">
          <button className="infoButton">
            <AiOutlineProfile /> Dosyalar
          </button>
          <button className="infoButton">
            <MdLiveTv /> Derse Katıl
          </button>
          <button className="infoButton">
            <FcVideoCall /> Kayıtlı Dersler
          </button>
        </div>
      </div>
      <div className="contentInfo">
        <h2 className="infoTitle">Staj Eğtimi2 </h2>
        <div className="infoButtonsContainer">
          <button className="infoButton">
            <AiOutlineProfile /> Dosyalar
          </button>
          <button className="infoButton">
            <MdLiveTv /> Derse Katıl
          </button>
          <button className="infoButton"s>
            <FcVideoCall /> Kayıtlı Dersler
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Context
