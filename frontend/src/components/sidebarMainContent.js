import { useEffect, useState } from "react"
import Sidebar from "./sidebar"
import MainContent from './maincontentSales'
import {fetchProduct} from "../components/api"

function SidebarMainContent(){
  const [products, setProducts]=useState(null)
  const [selectedProduct, setSelectedProduct]=useState(null)

  useEffect(()=>{
    const getProducts=async()=>{
      try{
        const productList=await fetchProduct()
        setProducts(productList)
      }
      catch(error){
        console.log("Failed to fetch products:", error)
      }
    }
    getProducts()
  },[])
  return (
    <div className="sidebarMaincontent">
      <Sidebar products={products} onProductSelect={setSelectedProduct} />
      <MainContent selectedProduct={selectedProduct} />
    </div>
  );
}

export default SidebarMainContent