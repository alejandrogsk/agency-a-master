import { displayNoneCircleColor, circles } from './js-components/circles.js';
import { displayMenu, menuClose } from './js-components/menu.js';


document.addEventListener("DOMContentLoaded", () => {
    displayNoneCircleColor('#circles', 'd-n');
    //circleColor('.item', 'o-1', 'o-2', 'o-3', 'o-4');
    displayMenu('.navbar__responsive', '.navbar__menu', 'd-n');
    menuClose('.navbar__responsive--link', '#navi-toggle');
    circles();
    console.log("mensajde de esperanza 2")
});
