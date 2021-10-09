import InputText from "./InputText";
import ColorHandler from "./ColorHandler";
import FruitIcon from "./FruitIcon";
import FontHandler from "./FontHandler";
var App = function () {
    InputText();
    ColorHandler();
    FruitIcon();
    FontHandler();
};
window.addEventListener('load', App);
