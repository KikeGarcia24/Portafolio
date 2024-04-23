const iconMenu = document.getElementById("icon"); //Se manda a llamar el elemento Icon
const responsiveMenu = document.getElementById("menu"); //Se manda a llamar elemento Menu
/* const toggleMenu = iconMenu.querySelector("img").setAttribute("src","./img/menu.svg");
console.log(toggleMenu.includes("menu.svg")); */

/*Eventos de click en menu hamburguer*/

//Hace toggle a la clase show para que muestre el menu
iconMenu.addEventListener("click", () =>{
    responsiveMenu.classList.toggle("show");
    ;
});

iconMenu.addEventListener("click", () =>{
    iconMenu.querySelector("img").setAttribute("src","./img/menu.svg");
});

const links = document.querySelectorAll("#a__hamburguer"); //Se manda a llamar los elementos a dentro de el menu hamburguer
const [ l1, l2, l3, l4, l5, l6 ] = links; // Se hace deconstruct del array de los elementos

/*Eventos que cierran el menu para una mejor navegación */
l1.addEventListener("click", () =>{ 
    responsiveMenu.classList.remove("show");
});
l2.addEventListener("click", () =>{
    responsiveMenu.classList.remove("show");
});
l3.addEventListener("click", () =>{
    responsiveMenu.classList.remove("show");
});
l4.addEventListener("click", () =>{
    responsiveMenu.classList.remove("show");
});
l5.addEventListener("click", () =>{
    responsiveMenu.classList.remove("show");
});
l6.addEventListener("click", () =>{
    responsiveMenu.classList.remove("show");
});