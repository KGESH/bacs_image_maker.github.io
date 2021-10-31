import InputText from "./InputText";
import ColorHandler from "./ColorHandler";
import FruitIcon from "./FruitIcon";
import FontHandler from "./FontHandler";

const App = () => {
  InputText();
  ColorHandler();
  FruitIcon();
  FontHandler();
};

window.addEventListener("load", App);
