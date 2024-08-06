import SliderProdImg from "./sliderProdImg"
import ProdImgs from "./prodImgs"
import "./maincontentCust.css"

function MainContent(){
  return(
    <div className="main-content">
      <SliderProdImg/>
      <ProdImgs/>
    </div>
  )
}

export default MainContent