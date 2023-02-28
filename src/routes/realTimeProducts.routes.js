import { Router } from "express";
import productManager from "../controllers/ProductManager.js";
const realTimeProducts = Router()

let products = []

let importProds =  async (req,res)=> {
  let productsFetch = await productManager.getProducts()
  products.push(productsFetch)
}

importProds();

realTimeProducts.get('/', (req,res)=>{
    const productos = products[0]
    importProds();

    res.render("realtimeproducts",{
      titulo: "Productos en tiempo real",
      productos 
    })
  })


export default realTimeProducts