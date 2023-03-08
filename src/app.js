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

io.on("connection", async (socket)=> {
  console.log("cliente conectado")

  socket.on("addItem", async info => {
    socket.emit("mssgAddProd", await productManager.addProduct(info, []))
    socket.emit("getProds", await productManager.getProducts())
    })

  socket.on("delItem", async id => {
    socket.emit("mssgDelProd", productManager.deleteProductById(parseInt(id)))
    socket.emit("getProds", await productManager.getProducts())
    })
  
    socket.emit("getProds", await productManager.getProducts());
    
})


app.use("/", express.static(__dirname + "/public"));

app.use("/", homeHbs);
app.use("/api/products", routerProduct);
app.use("/api/carts", routerCart);
app.use("/realtimeproducts", realTimeProducts);