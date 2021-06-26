import InputText from "./InputText";
import ColorHandler from "./ColorHandler";
import FruitIcon from "./FruitIcon";

const App = () => {
  InputText();
  ColorHandler();
  FruitIcon();
}

window.addEventListener('load', App);
