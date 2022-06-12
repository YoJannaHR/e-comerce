'use strict'

window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');
  
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
  }



  /*!---=============BASE DE DATOS POSTIZA=============---*/
  const ropa = [
    {
        id: 0,
        imgUrl: "https://i.postimg.cc/jjK4gVDY/featured3.png",
        nombre: "sweatshirt",
        Precio: 11,
        stock:49,
        category:"sweatshirts"
    },
    {
        id: 1,
        imgUrl: "https://i.postimg.cc/wTCVNRHv/featured1.png",
        nombre: "hoodie",
        Precio: 14,
        stock:2,
        category:"hoodies"
    },
    {
        id: 2,
        imgUrl: "https://i.postimg.cc/sg5J4fDJ/featured2.png",
        nombre: "shirt",
        Precio: 12,
        stock: 12,
        category: "shirts" 
    }
  ]
/*
let productos = document.querySelector('contenido_productos')

let fragmento = new DocumentFragment

for(let i = 0; i < ropa.length; i++){
 
 let div = document.("article")
  div.classList.add("article")*/

  /*!---=============INICIO DEL FILTRADO DEL PRODUCTOS=============---*/

  function filtrarProductos( tipo ){
    let contenedor = document.querySelector(".contenido_productos")
    let fragmento = ""

    let resultadoProductos = ropa.filter( (ropa) => ropa.category === tipo )
    
    resultadoProductos.forEach( (producto) => {
        fragmento += 
        `<article class="card_productos hoddies">
        <div class="productos_imagenes">
          <img src=${producto.imgUrl} alt="">
        </div>
        <div class="products__data">
           <h2 class="products__price">${producto.Precio}<span class="products__quantity">| Stock:${producto.stock}</span></h2>
           
           <h3 class="producs__name">${producto.nombre}</h3>
           <button class="boton products__button"></button>
        </div>
      </article>
        `
    })
    contenedor.innerHTML = fragmento

}
filtrarProductos("shirts")

/*!---=============FIN DEL FILTRADO DEL PRODUCTOS=============---*/
/*!---=============INICIA EVANTO FILTRADO CON CLICK=============---*/
/* 1- empezamos desde el li con clase = item_productos linea_productos*/