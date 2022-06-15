'use strict'

// window.onload = function(){
//     var contenedor = document.getElementById('contenedor_carga');
  
//     contenedor.style.visibility = 'hidden';
//     contenedor.style.opacity = '0';
//   }
  
 /*!---=============VISTA DE CARRITO VACIO=============---*/  


  let botonCompra = document.querySelector('#boton_compra')
  let  cartOverlay = document.querySelector('.carrito_vacio')
  botonCompra.addEventListener("click", () =>{
     
    cartOverlay.classList.add("mostrar")

  })

  let cerrarCarrito = document.querySelector('#cart-close')
  let  quitarCartOverlay = document.querySelector('.carrito_vacio')

  cerrarCarrito.addEventListener("click", () =>{
     
     quitarCartOverlay.classList.replace("mostrar" , "carrito_vacio")

  })


/*!---============= FIN VISTA DE CARRITO VACIO=============---*/


  /*!---=============BASE DE DATOS POSTIZA=============---*/
  const ropa = [
    {
        id: 0,
        nombre: "sweatshirt",
        imgUrl: "https://i.postimg.cc/jjK4gVDY/featured3.png",
        Precio: 11,
        stock:49,
        category:"sweatshirts"
    },
    {
        id: 1,
        nombre: "hoodie",
        imgUrl: "https://i.postimg.cc/wTCVNRHv/featured1.png",
        Precio: 14,
        stock:2,
        
    },
    {
        id: 2,
        nombre: "shirt",
        imgUrl: "https://i.postimg.cc/sg5J4fDJ/featured2.png",
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
/*=======================INICIO DEL FILTRADO DE PRODUCTOS POR CATEGORIAS=====--*/



/*
<ul class="filtros_productos">
<li class="item_productos linea_productos" data-filter="all">
  <h3 class="titulo_productos">
    Show All
  </h3>
  <span class="stock_productos">
    show all products
  </span>
</li>

<li class="item_productos linea_productos active-product" data-filter=".hoodies">
  <h3 class="titulo_productos">
    Hoodies
  </h3>
  <span class="stock_productos">
    3 products
  </span>
</li>

<li class="item_productos linea_productos" data-filter=".shirts">
  <h3 class="titulo_productos">
    Shirts
  </h3>
  <span class="stock_productos">
    4 products
  </span>
</li>

<li class="item_productos" data-filter=".sweatshirts">
  <h3 class="titulo_productos">
    Sweatshirts
  </h3>
  <span class="stock_productos">
    4 products
  </span>
</li>
</ul>*/





  /*!---=============INICIO DEL FILTRADO DEL PRODUCTOS=============---*/

  
  let btnShowAll = document.querySelector(".show-all")
  btnShowAll.addEventListener("click", () =>{
    return filtrado("category")
  })

  let btnHoodies = document.querySelector(".hoodies")
  btnHoodies.addEventListener("click", () =>
{
  return filtrado("hoodies")
})
let btnShirts = document.querySelector(".shirts")
btnShirts.addEventListener("click", () =>
{
return filtrado("shirts")
})
let btnSweatshirts = document.querySelector(".sweatshirts")
btnSweatshirts.addEventListener("click", () =>
{
return filtrado("sweatshirts")
})



  let filtrado = function filtrarProductos( tipo ){


    let contenedor = document.querySelector(".contenido_productos")
    let fragmento = ""
    let cart =[]

    /*if(btnShowAll == true){
      for(let i = 0; i < ropa.length; i++){
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
      }
    }else{*/


  

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
           <button data_id="${producto.id}" class="boton products__button"></button>
        </div>
      </article>
        `
    })
    contenedor.innerHTML = fragmento

    let productsButton = document.querySelectorAll(".products__button")

    productsButton.forEach((button) => {
        
       button.addEventListener("click", () =>{
         const id = parseInt(button.getAttribute("data_id"))
         const product = ropa.find(item => item.id  == id)
        
         cart.push(product)

         console.log(cart) 
        })
         

    })
  }
  


/*!---=============FIN DEL FILTRADO DEL PRODUCTOS=============---*/
/*!---=============INICIA EVANTO FILTRADO CON CLICK=============---*/
/* 1- empezamos desde el li con clase = item_productos linea_productos*/



/*!---=============SUBIR PRODUCTOS AL CARRITO=============---*/



/*!---=============FIN SUBIR PRODUCTOS AL CARRITO=============---*/