const socket = io()

const delID = document.getElementById("delID")
const delSubmit = document.getElementById("delSubmit")

delSubmit.addEventListener("click", ()=> {
    const delIDVal = document.getElementById("delID").value
    if(delIDVal.trim().length >0){
        socket.emit("delItem", parseInt(delIDVal))
        // delIDVal = ""
    }
    }
)

const addProdID = document.getElementById("addProdID")
const addProdTitle = document.getElementById("addProdTitle")
const addProdDesc = document.getElementById("addProdDesc")
const addProdPrice = document.getElementById("addProdPrice")
const addProdStock = document.getElementById("addProdStock")
const addSubmit = document.getElementById("addSubmit")

addSubmit.addEventListener("click", ()=> {
    const addIDVal = document.getElementById("addProdID").value
    const addTitleVal = document.getElementById("addProdTitle").value
    const addDescVal = document.getElementById("addProdDesc").value
    const addPriceVal = document.getElementById("addProdPrice").value
    const addStockVal = document.getElementById("addProdStock").value

    socket.emit("addItem", addedItem = {id:addIDVal, title:addTitleVal, description:addDescVal, price:addPriceVal, stock:addStockVal})
    }
)