import express from "express";
import routerProduct from "./routes/products.routes.js";
import routerCart from "./routes/cart.routes.js";
import homeHbs from "./routes/homeHbs.routes.js"
import realTimeProducts from "./routes/realTimeProducts.routes.js";
import __dirname from "./path.js";
import { engine } from "express-handlebars";
import * as path from 'path';
import { Server } from "socket.io";
import productManager from "./controllers/ProductManager.js";
// const products = []

// let importProds =  async (req,res)=> {
//     let productsFetch = await productManager.getProducts()
//     products.push(productsFetch)
// }

// importProds();


const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, './views'))

const io = new Server(server);

io.on("connection", (socket)=> {
  console.log("cliente conectado")
  // importProds()

  socket.on("delItem", info => {
    productManager.deleteProductById(info)
    // importProds()
  })

  socket.on("addItem", info => {
    productManager.addProduct(info)
    // importProds()
  })

})


app.use("/", express.static(__dirname + "/public"));

app.use("/", homeHbs);
app.use("/api/products", routerProduct);
app.use("/api/carts", routerCart);
app.use("/realtimeproducts", realTimeProducts);

// export default products