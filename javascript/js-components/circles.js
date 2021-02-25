//Oculta la seccion cuando el width es menor 900px
export function displayNoneCircleColor(containerGrid, dNone) {  

    
    //clientWidth
    let $container = document.querySelector(containerGrid);
    let ancho = document.body.clientWidth;
    ancho < 900 ? $container.classList.add(dNone) :$container.classList.remove(dNone);
    
    //window.innerWidth
    const $size = window.addEventListener('resize', () => {
        let $container = document.querySelector(containerGrid);
        let ancho = window.innerWidth;
        ancho < 900 ? $container.classList.add(dNone) :$container.classList.remove(dNone);
    });
    
}

  
  
//Hace que los colores cambien segun el orden establecido
/*
export function circleColor(item, o1, o2, o3, o4) {
    const boton = document.querySelectorAll(item);
    for(let i = 0; i < boton.length; i++) {         
        setInterval(() => {
            if( boton[i].classList.contains( o1 ) ){
                boton[i].classList.replace( o1 ,o2 );
            } else if ( boton[i].classList.contains( o2 ) ){
                boton[i].classList.replace( o2 , o3);
            } else if ( boton[i].classList.contains( o3 ) ) {
                boton[i].classList.replace( o3, o4 );
            } else if ( boton[i].classList.contains( o4 ) ) {
                boton[i].classList.replace( o4, o1 );
            } 
        }, 1000);
    } 
}
*/
export function circles() {
    const container = document.getElementById("circles");
    container.classList.add("green__grid-1");
    const divsToDisplay = [];
  
    for (let i = 0; i < 49; i++) {
      let newDiv = document.createElement("div");
      divsToDisplay.push(newDiv);
      i++;
    }
  
    divsToDisplay.forEach((element) => {
      let randomNumber = Math.floor(Math.random() * (5 - 1)) + 1;
      element.classList.add("item");
      element.classList.add(`o-${randomNumber}`);
      container.appendChild(element);
    });
  
    setInterval(function () {
      container.childNodes.forEach((element) => {
        let randomNumber = Math.floor(Math.random() * (5 - 1)) + 1;
        element.removeAttribute("class");
        element.classList.add("item");
        element.classList.add(`o-${randomNumber}`);
      });
    }, 1000);
  
    /*let result = container.appendChild();*/
    return;
  }