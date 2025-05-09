function init() {
    var productos = document.getElementById("Productos")
    for(let x=1; x<=10; x++) {
        productos.innerHTML+=`<div class="card col-${x} tarjeta"  style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Producto ${x}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
    </div>
    </div>`
    }
}  