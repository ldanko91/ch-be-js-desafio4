import { Router } from "express";
import products from "../app.js";
const realTimeProducts = Router()


realTimeProducts.get('/', (req,res)=>{
    const productos = products[0]
  
    res.render("realtimeproducts",{
      titulo: "Productos en tiempo real",
      productos 
    })
  })


export default realTimeProducts