import { PiBooks, PiExamLight } from "react-icons/pi";
import './sidebar.css'
const Sidebar = () => {
  return (
    <div>
    <div className="sidebarHeader">
    <img
      className="sidebarLogo"
      src="https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc"
      alt="logo"
    />
    <h3 className="sidebarTitle">Kullanıcı Paneli</h3>
  </div>
  <div className="sidebarMenu">
    <a href="/"><h3>ana sayfa</h3></a>  
    <div className="sidebarMenuItem">
      <PiBooks />
      <a href="/card">
        <h4> Dersler</h4>
      </a>

      <PiExamLight />
      <a href="/about">
      <h4>Sınavlar</h4>
      </a>
     

    </div>
  </div>
  </div>
  )
}

export default Sidebar
