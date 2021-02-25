//Oculta la seccion cuando el width es menor 900px
export function displayNoneCircleColor(containerGrid, dNone) {  

    
    //clientWidth
    let $container = document.querySelector(containerGrid);
    let ancho = document.body.clientWidth;
    ancho < 900 ? $container.classList.add(dNone) :$container.classList.remove(dNone);
    
    //window.innerWidth
    window.addEventListener('resize', () => {
        let $container = document.querySelector(containerGrid);
        let ancho = window.innerWidth;
        ancho < 900 ? $container.classList.add(dNone) :$container.classList.remove(dNone);
    });
    
}


export function circles() {
    const container = document.getElementById("circles");
    container.classList.add("green__grid-1");
    const divsToDisplay = [];
  
    for (let i = 0; i < 49; i++) {
      let newDiv = document.createElement("div");
      divsToDisplay.push(newDiv);

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