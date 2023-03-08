const socket = io()

const delID = document.getElementById("delID")
const delSubmit = document.getElementById("delSubmit")

// socket.on("refresh", product.push(info))

delSubmit.addEventListener("click", (e)=> {
    e.preventDefault();
    const delIDVal = document.getElementById("delID").value
    if(delIDVal.trim().length >0){
        Swal.fire({
            icon: 'success',
            title: 'Producto eliminado',
            showConfirmButton: true,
            timer: 2000
        })
        socket.emit("delItem", parseInt(delIDVal))
    }
    }
)

const addSubmit = document.getElementById("addSubmit")

addSubmit.addEventListener("click", (e)=> {
    e.preventDefault();
    const addTitleVal = document.getElementById("addProdTitle").value
    const addDescVal = document.getElementById("addProdDesc").value
    const addPriceVal = document.getElementById("addProdPrice").value
    const addCodeVal = document.getElementById("addProdCode").value
    const addStockVal = document.getElementById("addProdStock").value
    const addStatusVal = true
    const addCatVal = document.getElementById("addProdCat").value
    const addThumbVal = document.getElementById("addProdThumb").value
    const addedItem = {
        title:addTitleVal, 
        description:addDescVal, 
        price:addPriceVal, 
        code: addCodeVal,
        stock:addStockVal,
        status: addStatusVal,
        category: addCatVal,
        thumbnail: addThumbVal
    }
        

    socket.emit("addItem", addedItem) 
    }
)
    
socket.on("mssgAddProd", async mssg => {
    await Swal.fire({
        icon: 'success',
        title: `El producto fue agregado correctamente!`,
        showConfirmButton: true,
    })
    await location.reload()
    console.log("Added product:" + mssg)
})

socket.on("mssgDelProd", async mssg => {
    if (mssg) {
        await Swal.fire({
            icon: 'success',
            title: 'El producto fue eliminado',
            showConfirmButton: true,
        })
        await location.reload()
    } else {
        await Swal.fire({
            icon: 'error',
            title: 'No se pudo eliminar el producto',
            showConfirmButton: true,
        })
        await location.reload()
    }
    console.log(mssg)
})
