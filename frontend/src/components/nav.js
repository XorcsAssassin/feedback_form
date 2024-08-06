import "./nav.css"
import { useNavigate } from "react-router-dom"

function Nav(){
  const navigate=useNavigate()
  const handleProfile=()=>{
    navigate('/Profile')
  }
  return(
    <nav>
      <div className="ecom">
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="logo" alt="logo"/>
        <h3>Site Name</h3>
      </div>
      <div className="items">
        <button className="button" onClick={handleProfile}>
        <i class="bi bi-person"></i>Profile
        </button>
      </div>
    </nav>
  )
}

export default Nav