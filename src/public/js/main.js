const socket = io()

const delID = document.getElementById("delID")
const delSubmit = document.getElementById("delSubmit")

delSubmit.addEventListener("click", ()=> {
    const delIDVal = document.getElementById("delID").value
    if(delIDVal.trim().length >0){
        socket.emit("delItem", parseInt(delIDVal))
    }
    }
)

const addProdTitle = document.getElementById("addProdTitle")
const addProdDesc = document.getElementById("addProdDesc")
const addProdPrice = document.getElementById("addProdPrice")
const addProdCode = document.getElementById("addProdCode")
const addProdStock = document.getElementById("addProdStock")
const addProdStatus = true
const addProdCat = document.getElementById("addProdCat")
const addProdThumb = document.getElementById("addProdThumb")

const addSubmit = document.getElementById("addSubmit")

addSubmit.addEventListener("click", ()=> {
    const addTitleVal = document.getElementById("addProdTitle").value
    const addDescVal = document.getElementById("addProdDesc").value
    const addPriceVal = document.getElementById("addProdPrice").value
    const addCodeVal = document.getElementById("addProdCode").value
    const addStockVal = document.getElementById("addProdStock").value
    const addStatusVal = true
    const addCatVal = document.getElementById("addProdCat").value
    const addThumbVal = document.getElementById("addProdThumb").value

    socket.emit("addItem", addedItem = {
        title:addTitleVal, 
        description:addDescVal, 
        price:addPriceVal, 
        code: addCodeVal,
        stock:addStockVal,
        status: addStatusVal,
        category: addCatVal,
        thumbnail: addThumbVal
    })
    }
)