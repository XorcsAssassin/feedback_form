import Nav from "../components/nav"
import Footer from "../components/footer"
import SidebarMainContent from "../components/sidebarMainContent"
import "./salesDashboard.module.css"

function SalespersonDashboard(){
  return(
    <div className="salespersonDashboard">
      <Nav/>
      <div className="maincontent">
        <SidebarMainContent/>
      </div>
      <Footer/>
    </div>
  )
}

export default SalespersonDashboard