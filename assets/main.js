'use strict'
// window.onload = function(){
//     var contenedor = document.getElementById('contenedor_carga');
//     contenedor.style.visibility = 'hidden';
//     contenedor.style.opacity = '0';
//   }
  //-------============= Menu hambuerguesa ===========-----*/
  
  let botonMenuHamburguesa = document.querySelector(".boton_menuMovil")
  let MenuHamburguesa = document.querySelector(".menu-mobile")
  let closeHamburguesa = document.querySelector(".cart-close2")
  let quitarMenuHamburguesa = document.querySelector(".menu-mobile")
  
  
  botonMenuHamburguesa.addEventListener("click", ()=>{
       MenuHamburguesa.classList.add("mostrar2")
  })

  // closeHamburguesa.addEventListener("click",() =>{

  //   quitarMenuHamburguesa.classList.replace("mostrar2" , ".menu-mobile")
  // })


//   menuHamburguesa.addEventListener("click", (e) =>
//   fragmentoHTML += `
//   <div class="menu-mobil">
//     <nav
//      <p>$${ suma }</p>
//  </div>
// `
//   )
let contenedor = document.querySelector(".contenido_productos")
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
        category: "hoodies"
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
    /*!---=============Variables Busquedas elementos =============---*/
  let contador = document.querySelector("#contador")
  let cartContainer = document.querySelector(".cart-list")
  let cart = []
  
    /*!---============= Fin Variables Busquedas elementos=============---*/
  /*!---=============INICIO DEL FILTRADO DEL PRODUCTOS=============---*/
  let btnShowAll = document.querySelector(".show-all")
  btnShowAll.addEventListener("click", () =>{
    return filtrado2()
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
//-------======================inicio de funcion par visualizar todos los productos ===================------------//
let filtrado2 = function mostrarProductos() {
let fragmentHTML = ""
  ropa.forEach( (producto) =>{
      fragmentHTML +=
      ` <article class="card_productos hoddies">
      <div class="productos_imagenes">
        <img src=${producto.imgUrl} alt="">
      </div>
      <div class="products__data">
         <h2 class="products__price">$${producto.Precio}<span class="products__quantity">| Stock:${producto.stock}</span></h2>
         <h3 class="producs__name">${producto.nombre}</h3>
         <button data_id="${producto.id}" class="boton products__button"></button>
      </div>
    </article>
      `
  })
  contenedor.innerHTML = fragmentHTML
let productsButton = document.querySelectorAll(".products__button")
    productsButton.forEach((button) => {
       button.addEventListener("click", () =>{
         const id = parseInt(button.getAttribute("data_id"))
         const product = ropa.find(item => item.id  === id) //find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
         agregarProducto( product )
        })
     })
}
//-----------========== fin de la funcion para visualizar todos los productos ============--------*/
  let filtrado = function filtrarProductos( tipo ){
    let fragmento = ""
    let resultadoProductos = ropa.filter( (ropa) => ropa.category === tipo )
    resultadoProductos.forEach( (producto) => {
        fragmento +=
        `<article class="card_productos hoddies">
        <div class="productos_imagenes">
          <img src=${producto.imgUrl} alt="">
        </div>
        <div class="products__data">
           <h2 class="products__price">$${producto.Precio}<span class="products__quantity">| Stock:${producto.stock}</span></h2>
           <h3 class="producs__name">${producto.nombre}</h3>
           <button data_id="${producto.id}" class="boton products__button"></button>
        </div>
      </article>
        `
    })
    contenedor.innerHTML = fragmento
  }
/*!---=============FIN DEL FILTRADO DEL PRODUCTOS=============---*/
/*!---=============SELECIONAR PRODUCTOS CARRITO =============---*/
// let cart = []
// let productsButton = document.querySelectorAll(".products__button")
//     productsButton.forEach((button) => {
//        button.addEventListener("click", () =>{
//          const id = parseInt(button.getAttribute("data_id"))
//          const product = ropa.find(item => item.id  === id) //find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
//            cart.push(product)
//             console.log((cart))
//         //  agregarProducto(product)
//         })
//      })
    // }
  function agregarProducto( producto ){
    let resultadoFind = cart.find( item => item.id === producto.id )
//     // resultadoFind = "actualizacion"
    if( resultadoFind ){
        let stock = cart[resultadoFind.index].stock
        let quantitySelected = cart[resultadoFind.index].quantitySelected
    cart[resultadoFind.index].quantitySelected//cantidad de productos seleccionados
        if( stock > quantitySelected){
            cart[resultadoFind.index].quantitySelected += 1
        }
        else{
           alert( "No tenemos suficiente inventario" )
        }
    }else{
        producto.quantitySelected = 1
        producto.index = cart.length
        cart.push(producto)
    }
    //  console.log(cart)
    mostrarProductosCart()
 }
function mostrarProductosCart(){
    let fragmentoHTML = ``
    let suma = 0
     let cantidadTotal = 0
    cart.forEach( item =>{
        fragmentoHTML += `
        <div class="cart-item">
            <img src=${item.imgUrl} alt="">
            <p>${item.nombre}</p>
            <small>Cantidad: ${item.quantitySelected}</small>
        </div>
       `
//-----variable que hace la suma de los productos--------*/
        let totalProducto = item.quantitySelected * item.Precio
        suma += totalProducto
      cantidadTotal += item.quantitySelected
    })
     fragmentoHTML += `
      <div class="cart-price">
         <p>Productos seleccionados:${ cantidadTotal }</p>
         <p>$${ suma }</p>
     </div>
    `
   cartContainer.innerHTML = fragmentoHTML
    contador.textContent = cantidadTotal
}


