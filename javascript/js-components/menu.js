//Hacer el menú responsivo segun se ajuste la pantalla
export function displayMenu(menuResponsive, menuNormal, displayNone) {      
    
    let mr = document.querySelector(menuResponsive),
    mn = document.querySelector(menuNormal),
    anchoCW = document.body.clientWidth;

    if( anchoCW <= 800 ) {
        mr.classList.remove(displayNone);
        mn.classList.add(displayNone);
    } else {
        mr.classList.add(displayNone);
        mn.classList.remove(displayNone);
    }

    const size = window.addEventListener('resize', () => {
        let mr = document.querySelector(menuResponsive),
            mn = document.querySelector(menuNormal),
            anchoIW = window.innerWidth;
        if( anchoIW <= 800 ) {
            mr.classList.remove(displayNone);
            mn.classList.add(displayNone);
        } else {
            mr.classList.add(displayNone);
            mn.classList.remove(displayNone);
        }
    });
}


//Cerrar menú responsivo al hacer click en un link
export function menuClose(clickLinks, checkboxToggle) {
    const $links = document.querySelectorAll( clickLinks );
    $links.forEach( ($links) => {
        $links.addEventListener('click', () => {
            document.querySelector(checkboxToggle).checked = false ;
        })
    });
}
